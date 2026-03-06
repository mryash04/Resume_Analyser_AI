const { analyzeTextService } = require("../services/aiServices");
const { analyzeSchema } = require("../validators/analyzeValidator");
const logger = require("../utils/logger");

async function analyzeText(req, res, next) {

try {

    logger.info("AI analyze request received");
    
const parsed = analyzeSchema.parse(req.body);

const { text } = req.body;

if (!text) {
return res.status(400).json({
error: "Text is required"
});
}

const result = await analyzeTextService(parsed.text);

logger.info("AI analysis successful");

res.json(result);

} catch (error) {

    logger.error("AI analysis failed", { error: error.message });

    next(error)

    console.log("error", error);

res.status(500).json({ error: "AI processing failed" });

}

}

module.exports = { analyzeText };