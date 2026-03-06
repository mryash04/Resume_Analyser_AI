const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: "AIzaSyD5cdaUuJQ7E37gEtWctnlKLZJDFRlGPdo"
});

module.exports = ai;