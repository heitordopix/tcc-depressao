const { Sequelize } = require('sequelize');
const {sequelize} = require('./conexao.bancodedados')


const TabelaExemplo = sequelize.define('TabelaExemplo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dado1: {
        type: Sequelize.STRING, 
    },
    dado2: {
        type: Sequelize.STRING
    }, 
}); 

const ListagemEventos = sequelize.define('Jogos',{
    titulo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data:{
        type: Sequelize.STRING
    }

})

sequelize.sync() // ESSE CARA AO USAR .sync() VAI GERAR AS TABELAS QUE VCS DECLARAREM AQUI

module.exports = {TabelaExemplo};