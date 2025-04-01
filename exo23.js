     
function sommeTableau(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) { 
        somme += tableau[i]; 
    }
    return somme; 
}
const tableau = [1, 2, 3, 4, 5]; 
const resultat = sommeTableau(tableau); 
console.log(resultat); 