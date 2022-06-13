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

module.exports = router;