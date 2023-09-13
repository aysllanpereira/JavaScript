let entradas = [10, 5, 30, 50, 58, 60, 39, 97, 8, 9];
let i = 0;

function gets() {
    let valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

/* método usado para exportar um código de uma pasta para outra */ 
module.exports = { gets, print };