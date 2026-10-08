// EXERCÍCIO 08

// Escreva um programa você digita seu nome e mostra o console usando templates String (``) - Olá dev nome concatenado.
// --------------------------------------------------------

let nome1 = prompt('Qual o seu nome?: ')

let mensagem = nome1 ? `Olá, dev ${nome1}`: 'Você não digitou';

alert(mensagem)