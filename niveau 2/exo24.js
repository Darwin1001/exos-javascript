function extraireNoms(utilisateurs) {
    return utilisateurs.map(utilisateur => utilisateur.nom);
}


const utilisateurs = [
    { id: 1, nom: "Alice", age: 25 },
    { id: 2, nom: "Bob", age: 30 },
    { id: 3, nom: "Charlie", age: 35 }
];

console.log(extraireNoms(utilisateurs));


