let numero = 0;

let divisivelPor5 = (numero % 5) === 0;

console.log(divisivelPor5);

if (numero === 0) {

    console.log("Número inválido");

} else if (divisivelPor5) {

    console.log("Sim");

} else {

    console.log("Não");
}