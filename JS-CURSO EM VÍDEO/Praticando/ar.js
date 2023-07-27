function verificar() {

    var nome = document.getElementById("inome");
    var nota1 = document.getElementById("in1");
    var nota2 = document.getElementById("in2");
    var res = document.getElementById("res");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");

    var Nome = inome.value;
    var inota1 = Number(in1.value);
    var inota2 = Number(in2.value);

    var media = (inota1 + inota2) / 2;

    outMedia.textContent = "Média das Notas: " + media.toFixed(1);

    if (media >= 7) {
        outSituacao.textContent = "Parabéns, !" + Nome + " Você foi aprovado(a)!";
        outSituacao.style.color = "blue";
    } else {
        outSituacao.textContent = "Ops, " + Nome + "! Você foi reporvado(a)!";
        outSituacao.style.color = "red";
    }
}