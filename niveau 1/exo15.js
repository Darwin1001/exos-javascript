const personne = {
    nom: "Alice",
    direBonjour: function() {
        return `Bonjour, je m'appelle ${this.nom}!`;
    }
};
console.log(personne.direBonjour()); 
const autrePersonne = {
    nom: "Bob"
}
const direBonjourAutre = personne.direBonjour.bind(autrePersonne);
console.log(direBonjourAutre()); 
