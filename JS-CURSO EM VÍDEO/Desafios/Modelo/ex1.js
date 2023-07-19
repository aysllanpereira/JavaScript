
function carregar() {
    var msg = document.querySelector("div#msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas!!`;

    if(hora >= 0 && hora < 12) {
        /* bom dia */
        img.src = "Arquivos/fotomanha.png";
        document.body.style.background = "#f0c9ba";
    } else if (hora >= 12 && hora <= 18) {
        /* boa tarde */
        img.src = "Arquivos/fototarde.png";
        document.body.style.background = "#bf7d75";
    } else {
        /* boa noite */
        img.src = "Arquivos/fotonoite.png";
        document.body.style.background = "#191970";
    }


}