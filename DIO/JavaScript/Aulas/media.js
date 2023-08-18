function calcular() {

    let nomeAluno = document.getElementById("inome").value;
    let primeiraNota = parseFloat(document.getElementById("inota1").value);
    let segundaNota = parseFloat(document.getElementById("inota2").value);
    let terceiraNota = parseFloat(document.getElementById("inota3").value);
    let resultado = document.getElementById("res");

    let media = (primeiraNota + segundaNota + terceiraNota) / 3;

    if (media < 5) {

        resultado.style.color = `red`;
        resultado.innerHTML = `O aluno ${nomeAluno} ficou com a média ${media.toFixed(2)}. Infelizmente foi reprovado na matéria, mais sorte na próxima prova!`;

    } else if (media >= 5 && media <= 7) {

        resultado.style.color = `yellow`;
        resultado.innerHTML = `O aluno ${nomeAluno} ficou com a média ${media.toFixed(2)}. Infelizmente não foi aprovado de primeira, mas poderá tentar uma nova melhor na recuperação. Boa sorte!`;

    } else {

        resultado.style.color = `green`;
        resultado.innerHTML = `Parabéns, ${nomeAluno}! Ficou com a média final de ${media.toFixed(2)}. Foi aprovado com sucesso!!`;
    }
}