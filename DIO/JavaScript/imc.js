function calcularImc (peso, altura) {

    return peso / Math.pow(altura, 2);

}

function classificarImc(imc, nomePessoa, res) {

    if (imc <= 18.5) {

        res.innerHTML = `${nomePessoa}, seu IMC é: ${imc.toFixed(2)}. Você está abaixo do peso!`;

    } else if (imc >= 18.5 && imc < 25) {
        
        res.innerHTML = `${nomePessoa}, o seu IMC é: ${imc.toFixed(2)}. Você está com o peso normal!`

    } else if (imc >= 25 && imc < 30) {

        res.innerHTML = `${nomePessoa}, seu IMC é: ${imc.toFixed(2)}. Você está acima do peso, oriento a fazer atividade física!`;

    } else if (imc >= 30 && imc < 40) {

        res.innerHTML = `${nomePessoa}, seu IMC é: ${imc.toFixed(2)}. Você está muito acima do peso, procure um nutricionista!`;

    } else {

        res.innerHTML = `${nomePessoa}, seu IMC é ${imc.toFixed(2)}. Você está em estado de obesidade, procure ajuda médica!`;

    }
}

function resultado() {

    let nomePessoa = document.getElementById("inome").value;
    let altura = parseFloat(document.getElementById("ialtura").value);
    let peso = parseFloat(document.getElementById("ipeso").value);
    let res = document.getElementById("res");

    let imc = calcularImc(peso, altura);

    classificarImc(imc, nomePessoa, res);

} 