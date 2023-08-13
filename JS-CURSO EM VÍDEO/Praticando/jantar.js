function verificar() {

    let jantar = parseFloat(document.getElementById("inum").value);
    let garçom = jantar * 0.10;
    let total = jantar + garçom;
    let res = document.getElementById("res");

    res.innerHTML = `Taxa do garçom R$${garçom.toFixed(2)} e o total da conta deu R$${total.toFixed(2)}`;

}



