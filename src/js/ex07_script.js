// EXERCÍCIO 07

// Escreva um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado. 
// Considere que a média mínima para aprovação é 6. 
// Demonstre a saída.
// --------------------------------------------------------

// define as 7 notas
function executarEx07() {
let nota1 = Number(prompt("Digite sua primeira nota: "));
let nota2 = Number(prompt("Digite sua segunda nota: "));
let nota3 = Number(prompt("Digite sua terceira nota: "));
let nota4 = Number(prompt("Digite sua quarta nota: "));
let nota5 = Number(prompt("Digite sua quinta nota: "));
let nota6 = Number(prompt("Digite sua sexta nota: "));
let nota7 = Number(prompt("Digite sua sétima nota: "));

//  calcula a soma e a media aritmetica
let soma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7;
let media = soma /7;

//  media arredondada p 2 casas decimais 
alert("Média final do aluno: " + media.toFixed(2)); // saida 

// verifica se foi aprovado ou reprovado
if (media >= 6) {
    alert("Aluno APROVADO!");
} else {
    alert("Aluno REPROVADO!");
}

}
