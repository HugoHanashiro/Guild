var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/pegarStatus", function (req, res) {
    jogoController.pegarStatus(req, res);
})

router.post("/cadastrarStatus", function (req, res) {
    jogoController.cadastrarStatus(req, res);
})

router.post("/atualizarStatus", function (req, res) {
    jogoController.atualizarStatus(req, res);
})

router.post("/listarMeusJogos", function (req, res) {
    jogoController.listarMeusJogos(req, res);
})

router.post("/getIdRegistro", function (req, res) {
    jogoController.getIdRegistro(req, res);
})

router.post("/cadastrarGenero", function (req, res) {
    jogoController.cadastrarGenero(req, res);
})

router.post("/listarOcorrenciasPorStatus", function (req, res) {
    jogoController.listarOcorrenciasPorStatus(req, res);
});

router.post("/listarOcorrenciasPorGenero", function (req, res) {
    jogoController.listarOcorrenciasPorGenero(req, res);
});

module.exports = router;