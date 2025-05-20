function extrairPresentes(texto) {
  const linhas = texto.split('\n');
  const nomes = new Set();

  linhas.forEach(linha => {
    const match = linha.match(/^(.*?)(\s(disse|falou):)/i);
    if (match) nomes.add(match[1].trim());
  });

  return Array.from(nomes);
}

module.exports = { extrairPresentes };
