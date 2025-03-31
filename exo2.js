const personne = {
    nom: "Dupont",
    age: 30,
    ville: "Paris"
};
function modifierNom(personne, nouveauNom) {
    return { ...personne, nom: nouveauNom };
}
const nouvellePersonne = modifierNom(personne, "Durand");
console.log(personne); 
console.log(nouvellePersonne); 
