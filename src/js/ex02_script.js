// EXERCÍCIO 02

// Escreva um programa (usando if/else encadeado) que calcula o índice de massa corporal (IMC) de uma pessoa e exibe uma mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as seguintes faixas de IMC: abaixo de 18,5 (abaixo do peso), entre 18,5 e 24,9 (peso ideal) e acima de 24,9 (acima do peso). Demonstre a saída.
// --------------------------------------------------------

// IF e ELSE - ENCADEADO

// IMC - FAIXAS
// 18.5 (abaixo do peso)
// Entre 18.5 e 24.9 (peso ideal)
// 24.9 (acima do peso)


// Function - Guarda o código para rodar quando o usuário clicar no botão do HTML
function executarEx02() {
  // Exibe uma mensagem de boas-vindas ao usuário e pede seu nome
  alert(`-+-+- Bem-vindo(a) ao calculador de IMC -+-+-`);
  let nome = prompt("Qual o seu nome? ");
  alert(`Olá, ${nome}!`);

  // Pede ao usuário o peso e a altura
  let peso = prompt(`Por favor, digite o seu peso: `);
  let altura = prompt(`Digite a sua altura: `);

  // Calcular o IMC
  let imc = peso / altura ** 2;

  // Exibe o IMC arredondado para 2 casas decimais
  alert(`O seu IMC é de ${imc.toFixed(2)}`)

  // Verifica se o usuário está abaixo do peso, no peso ideal ou acima do peso e exibe o resultado
  if (imc < 18.5) {
    alert(`${nome}, você está ABAIXO DO PESO!`)
  } 
  
  else if (imc >= 18.5 && imc <= 24.9) {
    alert(`${nome}, você está no PESO IDEAL!`)
  } 
  
  else {
    alert(`${nome}, você está ACIMA DO PESO!`)
  }
}
