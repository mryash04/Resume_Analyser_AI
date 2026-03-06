const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const client = new OpenAI({
//   apiKey: OPENAI_API_KEY,
// });

module.exports = async function analyzeResume(resumeText) {
  const prompt = `
Analyze this resume and return JSON:

1. Skills
2. Experience Summary
3. Missing Skills
4. Suggested Improvements
5. Job Readiness Score (0-100)

Resume:
${resumeText}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
};

// const { GoogleGenAI } = require("@google/genai");

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// module.exports = async function analyzeResume(resumeText) {

//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: `
// You are an AI Resume Analyzer.

// Return STRICT JSON:

// {
//   "skills": [],
//   "experience_summary": "",
//   "missing_skills": [],
//   "suggested_improvements": [],
//   "job_readiness_score": 0
// }

// Resume:
// ${resumeText}
// `
//   });

//   let text = response.text;

//   text = text
//     .replace(/```json/g, "")
//     .replace(/```/g, "")
//     .trim();

//   return JSON.parse(text);
// };
