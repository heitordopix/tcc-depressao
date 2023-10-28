const express = require('express')
const porta = 2050

const servidor = express()

servidor.use(express.json())
servidor.use(express.static('public'))

servidor.listen(porta, () => {
    console.log(`SERVIDOR INICIADO EM: http://localhost:${porta}`)
})

servidor.post('/api/salvar', salvar)

function salvar(requisicao, resposta) {
    const corpoDaRequisicao = requisicao.body
    corpoDaRequisicao.mensagemResposta = "deu tudo certo :)"
    return resposta.status(200).json(corpoDaRequisicao)
}