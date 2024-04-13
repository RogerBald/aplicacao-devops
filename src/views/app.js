const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
    })

app.get('/integrantes', (req, res) => {
    res.sendFile('integrantes.html', { root: __dirname })
    })

app.listen(port, () => {
    console.log(`Servidor está rodando na porta: ${port}`);
});