// EXERCÍCIO 05

// Escreva um programa que verifica se o usuário tem permissâo ou nâo usando uma condicional ternária.
// --------------------------------------------------------

// solicita a idade do usuario 
function executarEx05() {
let idade = prompt("Digite sua idade: ")

idade = Number(idade);
let mensagem = (idade >= 18) ? "Acesso permitido" : "Acesso negado"

alert(mensagem);
}