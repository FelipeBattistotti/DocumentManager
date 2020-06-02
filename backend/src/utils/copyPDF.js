const fs = require('fs');
const pdfreader = require('pdfreader');

module.exports = function copyPDF(path) {

    let fileContent = "";

    var rows = {};

    function printRow(y) {
      fileContent = fileContent + (rows[y] || []).join('');
    }

    function printRows() {
      Object.keys(rows)
        .sort((y1, y2) => parseFloat(y1) - parseFloat(y2))
        .forEach(printRow);
    }

    let data = fs.readFileSync(path, (err, pdfBuffer) => {

      new pdfreader.PdfReader().parseBuffer(pdfBuffer, function(err, item) {
        if (err)
          console.error(err);
        else if (!item || item.page) {
          // fim do arquivo, ou pagina
          printRows();
          rows = {}; // limpa linhas pra proxima pagina
        }
        else if (item.text) {
          // acumula texto
          (rows[item.y] = rows[item.y] || []).push(item.text);
        }
      });

    });

    return data;
}
