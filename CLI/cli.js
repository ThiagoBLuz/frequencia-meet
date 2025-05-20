const fs = require('fs');
const path = require('path');
const { extrairPresentes } = require('../API/extrator');

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error("Uso: node cli.js <arquivo-transcricao> <arquivo-saida>");
  process.exit(1);
}

const [arquivoTranscricao, arquivoSaida] = args;

fs.readFile(arquivoTranscricao, 'utf8', (err, data) => {
  if (err) return console.error("Erro ao ler o arquivo:", err);

  const nomes = extrairPresentes(data);
  fs.writeFile(arquivoSaida, nomes.join('\n'), (err) => {
    if (err) return console.error("Erro ao escrever o arquivo:", err);
    console.log("Frequência salva em:", arquivoSaida);
  });
});
