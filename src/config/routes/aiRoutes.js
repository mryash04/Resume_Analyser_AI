const express = require("express");
const router = express.Router();
const { analyzeText } = require("../controllers/aiController");

router.post("/analyze", analyzeText);

module.exports = router;