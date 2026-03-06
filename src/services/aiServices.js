const ai = require("../config/gemini");
const { buildAnalyzePrompt } = require("../prompts/analyzePrompt");
const { cleanJSON } = require("../utils/jsonParser");
const logger = require("../utils/logger");
const tools = require("../tools/wordCount")

async function analyzeTextService(text) {
  if (text.startsWith("count words")) {
    const input = text.replace("count words", "").trim();

    logger.info("Executing tool: wordCount");

    return tools.wordCount(input);
  }

  const prompt = buildAnalyzePrompt(text);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  logger.info("Gemini response received");

  const cleaned = cleanJSON(response.text);

  return JSON.parse(cleaned);
}

module.exports = { analyzeTextService };
