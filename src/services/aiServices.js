const ai = require("../config/gemini");
const { buildAnalyzePrompt } = require("../prompts/analyzePrompt");
const { cleanJSON } = require("../utils/jsonParser");
const logger = require("../utils/logger");
const tools = require("../tools/wordCount");
const calculateTax = require("../tools/calculateTax");
const searchDocument = require("../tools/SearchDocument");

async function analyzeTextService(text) {
  const lower = text.toLowerCase();

  if (text.startsWith("count words")) {
    const input = text.replace("count words", "").trim();

    logger.info("Executing tool: wordCount");

    return tools.wordCount(input);
  }

  /* TOOL: TAX CALCULATOR */

  if (lower.includes("tax")) {
    const numbers = text.match(/\d+/);

    if (numbers) {
      const income = parseInt(numbers[0]);

      logger.info("Executing tool: calculateTax");

      return calculateTax.calculateTax(income);
    }
  }

  /**
   *  Search Documents
   */

  if (lower.startsWith("search")) {
    const query = text.replace("search", "").trim();

    logger.info("Executing tool: searchDocuments");

    return await searchDocument.searchDocuments(query);
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
