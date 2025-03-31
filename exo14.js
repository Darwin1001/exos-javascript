function creerSalutation(salutation) {
    return function(nom) {
        return `${salutation}, ${nom}!`;
    };
}
const direBonjour = creerSalutation("Bonjour");
console.log(direBonjour("Alice")); 

const direBonsoir = creerSalutation("Bonsoir");
console.log(direBonsoir("Bob")); 