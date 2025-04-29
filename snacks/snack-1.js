//funzione dichiarativa
function somma(a, b) {
    return a + b;
}

let risultato1 = somma (4, 10);
console.log(risultato1);

//funzione anonima
const sommaAnonima = function(a,b){
    return a + b;
}
let risultato2 = somma (8, 15);
console.log(risultato2);

//arrow function
const sommaArrow = (a,b) => a + b;
let risultato3 = sommaArrow(13, 24);
console.log(risultato3)