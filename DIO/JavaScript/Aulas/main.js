function escrevaMeuNome (nome) {
    console.log('My name is: ' + nome);
} 

escrevaMeuNome('Aysllan!');


function verificarIdade (idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade, já pode ser preso!');
    } else {
        console.log('Você é menor de idade, ainda não pode ser preso. Mete o loco, menor!');
    }
}

verificarIdade(17);