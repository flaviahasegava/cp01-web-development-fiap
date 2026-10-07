// EXERCÍCIO 04

//Escreva um programa que liste o Array no console (Thor, Hulk, Capitão América, Arqueiro e Viúva Negra)
// --------------------------------------------------------


function executarEx04 () {

    let heromarvel = ["Thor", "Hulk", "Capitão América", "Arqueiro", "Viúva Negra"];
    let herodc = ["Batman", "Superman", "Flash", "Aquaman", "Lanterna Verde"];

    let usuario = prompt (`Digite seu nome de usuário: `);
    let prefere = prompt (`O que voce prefere marvel ou dc ? `);

    if (prefere == `marvel`) {
        alert (heromarvel)
    }

    else {
        alert (herodc)
    }
        
}
