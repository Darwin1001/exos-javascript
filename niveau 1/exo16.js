function captureVariable() {
    const maVariable = " variable capturée";
    return function() {
        return maVariable;
    };
}
const getVariable = captureVariable();
console.log(getVariable()); 
