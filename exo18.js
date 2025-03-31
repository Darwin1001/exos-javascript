function filtrerImpairs(tab) {
    return tab.filter(element => element % 2 !== 0);
}
console.log(filtrerImpairs([1, 2, 3, 4, 5, 6])); 
console.log(filtrerImpairs([10, 12, 14, 15, 17])); 
