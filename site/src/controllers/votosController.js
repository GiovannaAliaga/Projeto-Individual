var votosModel = require("../models/votosModel");

var sessoes = [];


function votosUsuario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;
    var fkVotacao = req.body.fkVotacaoServer;


    // Faça as validações dos valores
    if (fkUsuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (fkVotacao == undefined) {
            res.status(400).send("Sua votação está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        votosModel.votosUsuario(fkUsuario, fkVotacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar seu voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarDados(req, res) {
    votosModel.buscarDados()
    .then(function(resultado) {
        if(resultado.length > 0 ) {
            res.status(200).json(resultado)
        } else {
            res.status(204).send("Nenhum resultado foi encontrado")
        }
    }).catch(
        function(erro) {
            console.log(erro)
            console.log("Houve um erro ao realizar a consulta, erro:", erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        }
    )
}


module.exports = {
  votosUsuario,
  buscarDados
}