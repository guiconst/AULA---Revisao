const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.json({
        mensagem: 'Seja Bem-vindo à API exemplo com Express!',
        timestamp: new Date().toISOString()
    });
});

app.get('/sobre', (req, res) => {
    res.json({
        nome: 'API Exemplo Express',
        versao: '1.0.0',
        descricao: 'Exemplo simples de API com rotas e parâmetros usando Express.',
        autor: 'Guilherme Constantino de Lara'
    });
});

app.get('/usuario/:nome', (req, res) => {
    const nome = req.params.nome;
    res.json({
        mensagem: `Olá, ${nome}! Bem-vindo(a) à API.`,
        usuario: nome,
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});