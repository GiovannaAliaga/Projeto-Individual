var express = require("express");
var router = express.Router();

var votosController = require("../controllers/votosController");


router.post("/votosUsuario", function (req, res) {
    votosController.votosUsuario(req, res);
});

router.get("/buscarDados", function (req, res) {
    votosController.buscarDados(req, res);
});


module.exports = router;