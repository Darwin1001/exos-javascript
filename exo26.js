function compterOccurrences(mots) {
    return mots.reduce((acc, mot) => {
        acc[mot] = (acc[mot] || 0) + 1;
        return acc;
    }, {});
}
console.log(compterOccurrences(["pomme", "banane", "pomme", "orange", "banane", "pomme"]));

