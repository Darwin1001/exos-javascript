function addSuffix(mots, suffixe) {
    return mots.map(mot => mot + suffixe);
}

const mots = ["chat", "chien", "oiseau"];
const suffixe = "s";
const motsAvecSuffixe = addSuffix(mots, suffixe);
console.log(motsAvecSuffixe); // 
