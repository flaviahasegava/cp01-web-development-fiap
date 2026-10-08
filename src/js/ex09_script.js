// EXERCÍCIO 09

// Escreva um programa que o usuário possa mudar a senha. O sistema só deve aceitar se a nova senha for diferente da senha atual.
// --------------------------------------------------------

function executarEx09() {
  // Pede o usuário, senha e se deseja modificar a senha atual
  let usuario = prompt(`Por favor, digite seu usuário:`);
  let senhaAtual = prompt(`Por favor, digite sua senha:`);
  let modificarSenha = prompt(`Deseja modificar sua senha? (S/N)`);

  // Verifica se o usuário quer modificar ou não a senha
  if (modificarSenha.toUpperCase() === `S`) { // UpperCase verifica se é letra maiúscula ou minúscula
    let novaSenha = prompt(`Digite sua nova senha:`);

    // Verifica se a senha nova é igual a senha atual
    if (novaSenha === senhaAtual) {
      alert(`ERRO! A sua nova senha é a mesma que a atual.`)
    }

    // Altera a senha atual do usuário para uma nova
    else {
      senhaAtual = novaSenha
      alert(`Senha alterada com sucesso!`)
    }

    // Exibe que a operação foi cancelada se o usuário não quiser modificar a senha
  } else {
    alert(`Tentativa de mudar a senha cancelada!`)
  }
}