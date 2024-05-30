#!/usr/bin/env node
import fs from "fs";
import path from "path";
import * as cli from "@clack/prompts";
import ora from "ora";
import generateComments from "./helper.js";

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
  ...["Generated", ".exclude", "node_modules", ".git", ".gitignore"],
  ...excludedPaths,
];

const ensureDirExists = async (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const copyFilesRecursive = async (source, destination, spinner) => {
  try {
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
            ".git",
            ".gitignore",
            ".md",
            ".env",
            ".png",
            ".gif",
            ".bmp",
            ".webp",
            ".svg",
            ".json",
            ".git",
            ".mp4",
            ".avi",
            ".mkv",
            ".mov",
            ".wmv",
            ".flv",
            ".webm",
          ].includes(fileExtension)
        ) {
          spinner.text = `copying ${sourcePath}`;
          fs.copyFileSync(sourcePath, destPath);
        } else {
          const content = fs.readFileSync(sourcePath, "utf8");
          if (content.length <= 7000) {
            spinner.text = `commenting ${sourcePath}`;

            const GeneratedContent = await generateComments(
              content,
              entry.name
            );
            if (GeneratedContent !== null) {
              fs.writeFileSync(destPath, GeneratedContent);
            } else {
              spinner.text = `copying ${sourcePath}`;

              fs.copyFileSync(sourcePath, destPath);
            }
          } else {
            spinner.text = `copying ${sourcePath}`;

            fs.copyFileSync(sourcePath, destPath);
          }
        }
      }
    }
  } catch (error) {
    console.log(error.message);
    spinner.stop();
  }
};

const sleep = (time = 1000) =>
  new Promise((resolve) => setTimeout(resolve, time));

async function main() {
  try {
    cli.intro("Let's Comment your Code");
    await sleep();

    const sourceDir = await cli.text({
      message: "Enter path of your source directory",
    });

    const spinner = ora("Scanning directory").start();
    await ensureDirExists(destDir);
    spinner.text = "Commenting...";
    await copyFilesRecursive(sourceDir, destDir, spinner);
    spinner.text = "Generated";
    spinner.stop();
  } catch (error) {
    console.log(error);
  }
}

main().catch((err) => console.log(err));
