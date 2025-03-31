function appliquerFonction(fonction, nombre) {
    return fonction(nombre);
}
function carre(x) {
    return x * x;
}
console.log(appliquerFonction(carre, 5)); 