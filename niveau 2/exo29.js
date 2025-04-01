function contientValeurSuperieureA100(tableau) {
    for (let i = 0; i < tableau.length; i++) { 
        if (tableau[i] > 100) { 
            return true; 
        } 
    } 
    return false; 
}
const tableau = [50, 75, 120, 90];
const resultat = contientValeurSuperieureA100(tableau);
console.log(resultat); 