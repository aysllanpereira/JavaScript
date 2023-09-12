let entradas = [5, 10, 30, 50, 90];
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