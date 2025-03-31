function sontTousPairs(tab) {
    return tab.every(element => element % 2 === 0);
}
console.log(sontTousPairs([2, 4, 6, 8])); 
console.log(sontTousPairs([2, 3, 6, 8])); 
