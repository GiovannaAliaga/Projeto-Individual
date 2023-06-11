var database = require("../database/config")


function votosUsuario(fkUsuario, fkVotacao) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO VotosUsuario (fkUsuario, fkVotacao) VALUES (${fkUsuario}, ${fkVotacao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDados() {
    var instrucao = "select count(idAvaliacao) as votacao, fkVotacao from VotosUsuario join Avaliacao on fkVotacao = idAvaliacao group by idAvaliacao order by fkVotacao;"
    return database.executar(instrucao);
}


module.exports = {
    votosUsuario,
    buscarDados
};