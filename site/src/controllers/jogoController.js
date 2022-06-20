var jogoModel = require("../models/jogoModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA jogoController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function pegarStatus(request, response) {
    let idUsuario = request.body.idUsuarioServer;
    let idJogo = request.body.idJogoServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else if (idJogo == undefined) {
        res.status(400).send("Seu idJogo está undefined!");
    } else {
        jogoModel.pegarStatus(idUsuario, idJogo).then(resultado => {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

            if (resultado.length == 1) {
                console.log(resultado);
                response.json(resultado[0]);
            } else if (resultado.length == 0) {
                response.status(403).send("Nenhum status de jogo encontrado");
            } else {
                response.status(403).send("Mais de um status para o mesmo jogo!");
            }
        });
    }
}

function cadastrarStatus(request, response) {
    let idUsuario = request.body.idUsuarioServer;
    let idJogo = request.body.idJogoServer;
    let status = request.body.statusServer;
    let imagem = request.body.imagemServer;
    let titulo = request.body.tituloServer;

    if (idUsuario == undefined) {
        response.status(400).send("Seu idUsuario está undefined!");
    } else if (idJogo == undefined) {
        response.status(400).send("Seu idJogo está undefined!");
    } else if (status == undefined) {
        response.status(400).send("Seu status está undefined!");
    } else if (imagem == undefined) {
        response.status(400).send("Sua imagem está undefined!");
    } else if (titulo == undefined) {
        response.status(400).send("Seu titulo está undefined!");
    } else {
        jogoModel.cadastrarStatus(idUsuario, idJogo, status, imagem, titulo).then(
            function (resultado) {
                response.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro de status do jogo! Erro: ",
                    erro.sqlMessage
                );
                response.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function atualizarStatus(request, response) {
    let idUsuario = request.body.idUsuarioServer;
    let idJogo = request.body.idJogoServer;
    let status = request.body.statusServer;

    if (idUsuario == undefined) {
        response.status(400).send("Seu idUsuario está undefined!");
    } else if (idJogo == undefined) {
        response.status(400).send("Seu idJogo está undefined!");
    } else if (status == undefined) {
        response.status(400).send("Seu status está undefined!");
    } else {
        jogoModel.atualizarStatus(idUsuario, idJogo, status).then(
            function (resultado) {
                response.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro de status do jogo! Erro: ",
                    erro.sqlMessage
                );
                response.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function listarMeusJogos(request, response) {
    let idUsuario = request.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else {
        jogoModel.listarMeusJogos(idUsuario).then(resultado => {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

            if (resultado.length > 0) {
                console.log(resultado);
                response.json(resultado);
            } else {
                response.status(403).send("Nenhum status de jogo encontrado");
            }
        });
    }
}

function getIdRegistro(request, response) {
    let idUsuario = request.body.idUsuarioServer;
    let idJogo = request.body.idJogoServer;

    if (idUsuario == undefined) {
        response.status(400).send("Seu idUsuario está undefined!");
    } else if (idJogo == undefined) {
        response.status(400).send("Seu idJogo está undefined!");
    } else {
        jogoModel.getIdRegistro(idUsuario, idJogo).then(
            function (resultado) {
                response.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao obter o idRegistro! Erro: ",
                    erro.sqlMessage
                );
                response.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function cadastrarGenero(request, response) {
    let idRegistro = request.body.idRegistroServer;
    let genero = request.body.generoServer;

    if (idRegistro == undefined) {
        response.status(400).send("Seu idRegistro está undefined!");
    } else if (genero == undefined) {
        response.status(400).send("Seu genero está undefined!");
    } else {
        jogoModel.cadastrarGenero(idRegistro, genero).then(
            function (resultado) {
                response.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao cadastrar o gênero! Erro: ",
                    erro.sqlMessage
                );
                response.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function listarOcorrenciasPorStatus(req, res) {
    let idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        response.status(400).send("Seu idUsuario está undefined!");
    } else {
        jogoModel.listarOcorrenciasPorStatus(idUsuario)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao obter as os registros por status! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listarOcorrenciasPorGenero(req, res) {
    let idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        response.status(400).send("Seu idUsuario está undefined!");
    } else {
        jogoModel.listarOcorrenciasPorGenero(idUsuario)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao obter as os registros por gênero! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    pegarStatus,
    testar,
    cadastrarStatus,
    atualizarStatus,
    listarMeusJogos,
    getIdRegistro,
    cadastrarGenero,
    listarOcorrenciasPorStatus,
    listarOcorrenciasPorGenero
}