function contar() {

    var in1 = document.getElementById("in1");
    var fim = document.getElementById("if1");
    var passo = document.getElementById("ip1");
    var rel = document.getElementById("res");

    if (in1.value.length == 0 ||  fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando: <br>";

        var i = Number(in1.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if (p <= 0) {
            alert("Passo inválido! Considerando PASSO 1");

            p = 1;
        }

        if (i < f) {
            // contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{27A1}`;
            }
        } else {
            // contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1}`;
            }
        }
        res.innerHTML += "\u{1F3C1}";
    }
}