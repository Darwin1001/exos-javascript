function additioncuryfié(a) {
    return function(b) {
        return a + b;
    };
}
console.log(additioncuryfié(2)(3));