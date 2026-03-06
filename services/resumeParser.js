const fs = require("fs");
const pdf = require("pdf-parse");

module.exports = async function parseResume(path) {
  const dataBuffer = fs.readFileSync(path);
  const data = await pdf(dataBuffer);
  return data.text;
};