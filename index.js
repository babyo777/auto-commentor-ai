#!/usr/bin/env node
import fs from "fs";
import path from "path";
import * as cli from "@clack/prompts";
import ora from "ora";
import generateComments from "./gemini.js";

const destDir = path.resolve("./Generated/");
const excludeFilePath = path.resolve("./.exclude");

if (!fs.existsSync(excludeFilePath)) {
  fs.writeFileSync(excludeFilePath, "");
}

let excludedPaths = fs
  .readFileSync(excludeFilePath, "utf8")
  .split("\n")
  .map((entry) => entry.trim())
  .filter((entry) => entry !== "");

excludedPaths = [
  ...["Generated", ".exclude", "node_modules"],
  ...excludedPaths,
];

const ensureDirExists = async (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const copyFilesRecursive = async (source, destination, spinner) => {
  const entries = fs.readdirSync(source, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);

    if (excludedPaths.includes(entry.name)) {
      continue;
    }

    if (fs.existsSync(destPath)) {
      continue;
    }

    if (entry.isDirectory()) {
      ensureDirExists(destPath);
      await copyFilesRecursive(sourcePath, destPath, spinner);
    } else {
      const fileExtension = path.extname(entry.name).toLowerCase();
      if (
        [
          ".jpg",
          ".jpeg",
          ".png",
          ".gif",
          ".bmp",
          ".webp",
          ".svg",
          ".json",
          ".git",
        ].includes(fileExtension) ||
        [".mp4", ".avi", ".mkv", ".mov", ".wmv", ".flv", ".webm"].includes(
          fileExtension
        )
      ) {
        fs.copyFileSync(sourcePath, destPath);
      } else {
        const content = fs.readFileSync(sourcePath, "utf8");
        if (content.length <= 7000) {
          spinner.text = `commenting ${sourcePath}`;

          const commentedContent = await generateComments(content, entry.name);
          if (commentedContent !== null) {
            fs.writeFileSync(destPath, commentedContent);
          } else {
            fs.copyFileSync(sourcePath, destPath);
          }
        } else {
          fs.copyFileSync(sourcePath, destPath);
        }
      }
    }
  }
};

const sleep = (time = 1000) =>
  new Promise((resolve) => setTimeout(resolve, time));

async function main() {
  cli.intro("Let's Comment your Code");
  await sleep();

  const sourceDir = await cli.text({
    message: "Enter path of your source directory",
  });

  const spinner = ora("Scanning directory").start();
  await ensureDirExists(destDir);
  spinner.text = "Commenting...";
  await copyFilesRecursive(sourceDir, destDir, spinner);
  spinner.text = "Commented";
  spinner.stop();
}

main().catch((err) => console.log(err));
