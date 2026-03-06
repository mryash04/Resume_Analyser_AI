const { analyzeTextService } = require("../services/aiServices");

async function analyzeText(req, res) {

try {

const { text } = req.body;

const result = await analyzeTextService(text);

res.json(result);

} catch (error) {

res.status(500).json({ error: "AI processing failed" });

}

}

module.exports = { analyzeText };