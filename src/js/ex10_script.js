// EXERCÍCIO 10

// Utilizando as variáveis valorProduto e valorDesconto crie uma nova variável chamada valorFinal que subtraia o desconto do preço e exiba o resultado.
// --------------------------------------------------------

function executarEx10() {
  // Pede o valor do produto e o valor de desconto
  let valorProduto = prompt(`Qual o valor do seu produto?`);
  let valorDesconto = prompt(`Qual o valor de desconto?`);

  // Calcula o valor final com desconto
  let valorFinal = valorProduto - valorDesconto
  
  // Exibe o valor final do produto
  alert(`O valor final do seu produto com desconto é de ${valorFinal.toFixed(2)}.`)
}