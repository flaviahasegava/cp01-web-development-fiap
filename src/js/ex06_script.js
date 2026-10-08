// EXERCÍCIO 06

// Escreva um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou se houve falha de autenticação. Demonstre a saída.
// --------------------------------------------------------

// AUTENTICAÇÃO
// usuario = "admin"
// senha = "1234"


function executarEx06 () {
    // Pede o usuário e a senha
    let usuario = prompt (`Digite seu nome de usuário:`);
    let senha = prompt (`Digite a sua senha:`);
    
    // Verifica se digitou o usuário e senha correta
    if (usuario == `admin` && senha == `1234`) {
        alert (`Login realizado com SUCESSO!`)
    }
    
    // Exibe a mensagem no caso de usuário e senha incorreta
    else {
        alert (`Senha INCORRETA! Falha de autenticação.`)
    }
}