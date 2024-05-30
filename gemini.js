import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

async function generateComments(text, path) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: Infinity,
      },
    });

    const prompt = `
   You're a Code commentor, your job is to only write comments when provided code and output only the modified raw code with comments without using markdown. You MUST NOT modify the code in any way.
     Write comments in the following file ${path} with code content -
 
     ${text}
 
     If the code doesn't make sense or the content of code doesn't seem like code send response 'NONE' only.
 
 
   `;

    const result = await chat.sendMessage(prompt);
    const res = await result.response;
    const output = await res.text();
    if (output.length > 0) {
      return output;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export default generateComments;
