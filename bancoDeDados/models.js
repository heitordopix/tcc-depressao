const { Sequelize } = require('sequelize');
const {sequelize} = require('./conexaobancodedados')


const TabelaExemplo = sequelize.define('CiarEvento', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    TituloEvento: {
        type: Sequelize.STRING, 
    },
    Data: {
        type: Sequelize.STRING
    }, 
    Descricao: {
        type: Sequelize.STRING
    }, 

}); 

const ListagemEventos = sequelize.define('Eventos',{
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