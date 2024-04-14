const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname)); // Define o diretório atual como o diretório raiz para servir arquivos estáticos

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname }); // Envia o arquivo 'index.html' como resposta para solicitações na raiz
});

app.get('/integrantes', (req, res) => {
    res.sendFile('integrantes.html', { root: __dirname }); // Envia o arquivo 'integrantes.html' como resposta para solicitações em '/integrantes'
});


app.listen(port, () => {
    console.log(`Servidor está rodando na porta: ${port}`);
});