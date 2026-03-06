const ai = require("../config/gemini");
const {cleanJSON} = require("../utils/jsonParser")

async function analyzeTextService(text) {

const prompt = `
Analyze this text.

Return JSON:
{
"title":"",
"summary":"",
"keywords":[]
}

TEXT:
${text}
`;

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: prompt
});

const cleaned = cleanJSON(response.text);

const parsed = JSON.parse(cleaned);

return parsed;

// const newText = response.text.replace(/```json/g, "").replace(/```/g, "").trim();

// // return cleanJSON(response.text);

// return newText

}

module.exports = { analyzeTextService };