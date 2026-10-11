// EXERCÍCIO 07

// Escreva um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado. 
// Considere que a média mínima para aprovação é 6. 
// Demonstre a saída.
// --------------------------------------------------------

// define as 7 notas
const nota1 = 7.5;
const nota2 = 9.0;
const nota3 = 8.0;
const nota4 = 7.0;
const nota5 = 9.0;
const nota6 = 8.5;
const nota7 = 6.0;

//  calcula a soma e a media aritmetica
const soma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7;
const media = soma /7;

//  media arredondada p 2 casas decimais 
console.log("Média final do aluno: " + media.toFixed(2)); // saida 7.29

// verifica se foi aprovado ou reprovado
if (media >= 6) {
    console.log("Aluno APROVADO!");
} else {
    console.log("Aluno REPROVADO!");
}
