function buildAnalyzePrompt(text) {

return `
ROLE: You are a text analyzer.

TASK: Extract information.

OUTPUT: JSON

{
"title":"",
"summary":"",
"keywords":[]
}

INPUT:
${text}
`;

}

module.exports = { buildAnalyzePrompt };