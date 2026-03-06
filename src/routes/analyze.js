const express = require("express");
const multer = require("multer");

const parseResume = require("../services/resumeParser");
const analyzeResume = require("../services/aiAnalyzer");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const text = await parseResume(req.file.path);

    console.log("textpdf......", {text : text})

    const result = await analyzeResume(text);

    console.log("textpdf......", {text : text, result : result})

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error analyzing resume");
  }
});

module.exports = router;