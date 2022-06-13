var database = require("../database/config");

function listar(idUsuario, idJogo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idUsuario, idJogo);
    var instrucao = `
        SELECT * FROM Usuario_Jogo WHERE fkUsuario = ${idUsuario} AND idJogo = ${idJogo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarStatus(idUsuario, idJogo, status) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarStatus():", idUsuario, idJogo, status);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario_Jogo (fkUsuario, idJogo, statusUsuarioJogo) VALUES ('${idUsuario}', '${idJogo}', '${status}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarStatus(idUsuario, idJogo, status) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarStatus():", idUsuario, idJogo, status);
    
    var instrucao = `
    UPDATE Usuario_Jogo SET statusUsuarioJogo = '${status}' WHERE fkUsuario = ${idUsuario} AND idJogo = ${idJogo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrarStatus,
    atualizarStatus
};