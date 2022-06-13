var database = require("../database/config");

function pegarStatus(idUsuario, idJogo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idUsuario, idJogo);
    var instrucao = `
        SELECT * FROM Usuario_Jogo WHERE fkUsuario = ${idUsuario} AND idJogo = ${idJogo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarStatus(idUsuario, idJogo, status, imagem, titulo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarStatus():", idUsuario, idJogo, status, imagem, titulo);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario_Jogo (fkUsuario, idJogo, statusUsuarioJogo, imagem, titulo) VALUES ('${idUsuario}', '${idJogo}', '${status}', '${imagem}', '${titulo}');
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

function listarMeusJogos(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarMeusJogos()", idUsuario);
    var instrucao = `
        SELECT * FROM Usuario_Jogo WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getIdRegistro(idUsuario, idJogo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function getIdRegistro()", idUsuario, idJogo);
    var instrucao = `
        SELECT idRegistro FROM Usuario_Jogo WHERE fkUsuario = ${idUsuario} AND idJogo = ${idJogo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarGenero(idRegistro, genero) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarGenero()", idRegistro, genero);
    var instrucao = `
        INSERT INTO Genero (fkRegistro, nomeGenero) VALUES (${idRegistro}, '${genero}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    pegarStatus,
    cadastrarStatus,
    atualizarStatus,
    listarMeusJogos,
    getIdRegistro,
    cadastrarGenero
};