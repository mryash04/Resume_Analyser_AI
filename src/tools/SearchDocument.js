// function searchDocument(document) {
//   let myDocument = document

//   return {
//     myDocument,
//     length: myDocument.length,
//   };
// }

// module.exports = { searchDocument };

const cosineSimilarity = require("cosine-similarity");
const documents = require("../data/documents");
const { createEmbedding } = require("../utils/embedding");

async function searchDocuments(query) {

     console.log("queryEmbedding", query)

  const queryEmbedding = await createEmbedding(query);

  const results = [];

  for (const doc of documents) {

    console.log("docEmbedding", doc, doc.content)

    const docEmbedding = await createEmbedding(doc.content);

    console.log("docEmbedding", docEmbedding)

    const similarity = cosineSimilarity(queryEmbedding, docEmbedding);

    results.push({
      ...doc,
      similarity
    });
  }

  results.sort((a, b) => b.similarity - a.similarity);

  return results.slice(0, 2);
}

module.exports = { searchDocuments };
