function premierSuperieurA10(tab) {
    return tab.find(element => element > 10);
}
console.log(premierSuperieurA10([5, 8, 12, 3, 9])); 
console.log(premierSuperieurA10([1, 2, 3, 4, 5]));  
