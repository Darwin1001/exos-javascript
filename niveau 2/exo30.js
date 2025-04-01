function sontTousDesChaines(tableau) {
    for (let i = 0; i < tableau.length; i++) { 
        if (typeof tableau[i] !== 'string') { 
            return false; 
        } 
    } 
    return true; 
}
const tableau = ["pomme", "banane", "orange"];
const resultat = sontTousDesChaines(tableau);
console.log(resultat); 
const tableau2 = ["pomme", 42, "orange"];
const resultat2 = sontTousDesChaines(tableau2);
console.log(resultat2); 