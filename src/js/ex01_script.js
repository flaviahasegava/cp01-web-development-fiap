// EXERCÍCIO 01

// Escreva um programa com os operadores (!=, ===, >=) demonstre a saída de cada um.
// --------------------------------------------------------

// cria-se 3 tipos de variaveis diferentes

function executarEx01() {
const val01 = 10;
const val02 = "10"; // string (texto)
const val03 = 5; 

// demonstração do operador != de diferença
console.log("\nDiferença entre o valor 01 e valor 02:");
console.log(val01 != val02); // saida false

// demonstração do operador === de igualdade  
console.log("\nEquivalência do valor 01 com valor 02 (===):");
console.log(val01 === val02);  // saida falsw

console.log("Equivalência do valor 01 e 10 (===):");
console.log(val01 === 10); // saida true

// demonstração do operador >= de maior/igual 
console.log("\nO valor 01 é maior que o valor 03?");
console.log(val01 >= val03); // saida true

console.log("O valor 03 é maior que o valor 01?");
console.log(val03 >= val01); // saida false

}