const ai = require("../config/gemini");

async function createEmbedding(text) {
  try{
    const result = await ai.models.embedContent({
    model: "text-embedding-004",
    contents: text
  });

  console.log({result})

  return result.embedding[0].values;
  }catch(error){
    console.log(error)
  }
}

module.exports = { createEmbedding };