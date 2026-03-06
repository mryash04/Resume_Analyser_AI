// // import {GoogleGenAI} from '@google/genai';

// // const genAI = new GoogleGenerativeAI("YOUR_API_KEY");

// // async function run() {

// // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // const result = await model.generateContent(
// // "Explain what LLMs are in 3 lines"
// // );

// // const response = result.response.text();

// // console.log(response);

// // }

// // run();

// // import {GoogleGenAI} from '@google/genai';
// const {GoogleGenAI} = require("@google/genai");

// const ai = new GoogleGenAI({apiKey: "AIzaSyD5cdaUuJQ7E37gEtWctnlKLZJDFRlGPdo"});

// async function main() {

//   const textInput = `
// Node.js is a JavaScript runtime built on Chrome's V8 engine.
// `;

// const prompt = `
// Analyze the following text.

// Return JSON with:
// title
// summary
// keywords

// TEXT:
// ${textInput}
// `;


// //   const prompt = `
// // Explain why the sky is blue.

// // Return ONLY JSON in this format:

// // {
// //   "reason": "",
// //   "short_explanation": "",
// //   "scientific_term": ""
// // }
// // `;

//   const response = await ai.models.generateContent({
//     model: 'gemini-2.5-flash',
//     contents: prompt
//   });
//   const json = JSON.stringify(response.text)
//   console.log(response.text, json);
// }

// main();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
apiKey: "AIzaSyD5cdaUuJQ7E37gEtWctnlKLZJDFRlGPdo"
});

function cleanJSON(text) {
return text.replace(/```json/g, "").replace(/```/g, "").trim();
}

function safeParseJSON(text) {
try {
return JSON.parse(text);
} catch {
return { error: "Invalid JSON", raw: text };
}
}

async function main() {

const prompt = `
ROLE:
You are a text analyzer.

TASK:
Analyze the text.

OUTPUT:
Return ONLY valid JSON.

SCHEMA:
{
"title": "",
"summary": "",
"keywords": []
}

INPUT:
Node.js is a JavaScript runtime built on Chrome's V8 engine.
`;

const response = await ai.models.generateContent({
model: "gemini-2.5-flash",
contents: prompt
});

const raw = response.text;

const cleaned = cleanJSON(raw);

const data = safeParseJSON(cleaned);

console.log(data);

}

main();