function addition(a, b, c) {
    return a + b + c;
}
function partielle(f, ...args) {
    return function(...arguments) {
        return f(...args, ...arguments);
    };
}
const additionPartielle = partielle(addition, 2, 3);
console.log(additionPartielle(5)); 