const dividi = (a, b) => a / b;
const sottrai = (a, b) => a - b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);
console.log(eseguiOperazione (40, 8, dividi));
console.log(eseguiOperazione(27, 9, sottrai));