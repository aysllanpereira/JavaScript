function verificar() {

    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("iano");
    var res = document.querySelector("div#res");

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        

    } else {

        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (fsex[0].checked) {
            genero = "Homem";

            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute("src", "Imagens/criancamenino.png");
            } else if (idade < 21) {
                // jovem
                img.setAttribute("src", "Imagens/adolmenino.png");
            } else if (idade < 50) {
                // adulto
                img.setAttribute("src", "Imagens/adulhomem.png");
            } else {
                // idoso
                img.setAttribute("src", "Imagens/idosohomem.png");
            }
            

        } else if (fsex[1].checked) {
            genero = "Mulher";
         

            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute("src", "Imagens/criancamenina.png");
            } else if (idade < 21) {
                // jovem
                img.setAttribute("src", "Imagens/adolmenina.png");
            } else if (idade < 50) {
                // adulto
                img.setAttribute("src", "Imagens/adulmulher.png");

            } else {
                // idoso
                img.setAttribute("src", "Imagens/idosamulher.png");
            }
        }
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos!`
        res.appendChild(img);
    } 
}