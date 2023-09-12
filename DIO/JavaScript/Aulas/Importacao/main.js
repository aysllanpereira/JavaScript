/* usado para importar um código de uma pasta para outra */ 

let { gets, print } = require('../Importacao/funcoes-auxiliares');

let numerosSorteados = [];

for(let i = 0; i< 5; i++) {
    let numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    let numerosSorteado = numerosSorteados[i];

    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
    
}

print(maiorValor);


