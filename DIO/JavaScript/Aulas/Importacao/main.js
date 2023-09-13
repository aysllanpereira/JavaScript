/* usado para importar um código de uma pasta para outra */ 

let { gets, print } = require('../Importacao/funcoes-auxiliares');

 /* let numerosSorteados = []; */

/* ou para simplificar tudo, posso fazer dessa forma. Excluir a variavél numerosSorteados com o array e por a condição dentro do for, o resultado será o mesmo */
/* essa linha deixa o código mais dinâmico, pois irá puxar a quantidade que for informada de alunos */
const quantidadeDeAlunos = gets(); 
let maiorValorEncontrado = 0;
/* a variável "quantidadeDeAlunos" define a quantidade que for informada */

for(let i = 0; i < quantidadeDeAlunos; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numerosSorteado;
    }
}

print(maiorValorEncontrado);

/* posso fazer dessa forma abaixo para encontrar o maior valor */

/*
for (let i = 0; i < numerosSorteados.length; i++) {
    let numerosSorteado = numerosSorteados[i];

    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
    
} */ 




