const { gets, print } = require('./salario');

const valorSalario = gets();
const valorBeneficios = gets();

function calcularPercentual(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario){
    if(salario >= 0 && salario <= 1100) {
        return 5;
    } else if(salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
   
    }
}

let aliquotasDoImposto = pegarAliquota(valorSalario);
let valorImposto = calcularPercentual(valorSalario, aliquotasDoImposto);
let valorATransferir = valorSalario - valorImposto + valorBeneficios;

print(valorATransferir);
