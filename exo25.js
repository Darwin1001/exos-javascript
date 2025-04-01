function filtrerEtDoublerImpairs(tab) {
    return tab.filter(element => element % 2 !== 0) 
              .map(element => element * 2); 
}


console.log(filtrerEtDoublerImpairs([1, 2, 3, 4, 5, 6])); 
console.log(filtrerEtDoublerImpairs([8, 12, 14])); 
