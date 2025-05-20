const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const { extrairPresentes } = require('./extrator');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());

app.post('/api/frequencia', upload.single('arquivo'), (req, res) => {
  const caminho = req.file.path;
  fs.readFile(caminho, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ erro: 'Erro ao ler o arquivo' });
    const nomes = extrairPresentes(data);
    res.json({ presentes: nomes });
  });
});

app.listen(3000, () => console.log('API rodando em http://localhost:3000'));
