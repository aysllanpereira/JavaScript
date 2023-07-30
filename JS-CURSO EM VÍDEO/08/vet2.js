function verificar() {

    let valores = [8, 5, 9, 10, 6, 2, 4];
    let num = parseInt(document.getElementById("inum").value, 10)
    let res = document.getElementById("res");

    if (num != valores.includes(num)) {
        res.innerHTML = `O número digitado está entre os selecionados no programa!`
    } else {
        res.innerHTML = `Ops... Escolheu o número errado, mais sorte na próxima!`
    }
}




//console.log(valores[0]);

/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}*/

/*for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}*/

