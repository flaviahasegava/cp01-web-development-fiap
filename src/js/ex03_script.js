// EXERCÍCIO 03

// Escreva um programa que faça uma repetição até 10 (usando for) aprsentando a mensagem no console, o valor da contagem é: !
// --------------------------------------------------------

function executarEx03() {
let nome1 = prompt('Qual o seu nome? ');

let mensagem = nome1 ? `Olá, seja bem vindo ao programa de repetição ${nome1}`: 'Olá, seja bem-vindo ao programa de repetição!';

alert(mensagem);

for(let numero = 1; numero <= 10; numero ++) {
 alert(`Contagem de numeros ${numero}`);
}

}