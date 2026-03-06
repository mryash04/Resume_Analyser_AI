const { z } = require("zod");

const analyzeSchema = z.object({
  text: z
    .string()
    .min(5, "Text must be at least 5 characters")
    .max(5000, "Text too long")
});

module.exports = { analyzeSchema };