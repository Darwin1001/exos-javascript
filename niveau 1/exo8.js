function ajouter5(x) {
    return x + 5;
}

function multiplierPar2(x) {
    return x * 2;
}

function composer(f1, f2) {
    return function(x) {
        return f2(f1(x));
    };
}
const result = composer(ajouter5, multiplierPar2)(10);
console.log(result); 
