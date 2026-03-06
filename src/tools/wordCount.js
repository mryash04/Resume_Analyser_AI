function wordCount(text) {

const words = text.trim().split(/\s+/);

return {
word_count: words.length
};

}

module.exports = { wordCount };