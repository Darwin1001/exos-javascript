function externe() {
    function interne() {
        return " appelé depuis une autre fonction";
    }
    return interne; 
}
const maFonction = externe(); 
console.log(maFonction()); 
