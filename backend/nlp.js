const stopWords = [
    "the",
    "is",
    "a",
    "an",
    "and",
    "to",
    "of",
    "for",
    "in",
    "on",
    "with",
    "that",
    "this",
    "are",
    "was",
    "were",
    "be",
    "by",
    "as",
    "at"
];

function extractKeywords(text) {

    const words = text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .split(/\s+/);

    const filteredWords =
        words.filter(word =>
            word &&
            !stopWords.includes(word)
        );

    const frequencies = {};

    filteredWords.forEach(word => {

        frequencies[word] =
            (frequencies[word] || 0) + 1;

    });

    const sortedWords =
        Object.entries(frequencies)
        .sort((a, b) => b[1] - a[1]);

    return sortedWords.slice(0, 10);

}

module.exports = {
    extractKeywords
};