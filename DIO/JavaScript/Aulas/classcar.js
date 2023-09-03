class Carros {

    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {

            this.marca = marca;
            this.cor = cor;
            this.gastoMedioPorKm = gastoMedioPorKm;

    }

    calcularGastodePercurso(distanciaEmKm, precoCombustivel) {
 
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;

    }

}

let uno = new Carros('Fiat', 'Vermelho', 1/12);
let palio = new Carros('Palio', 'Preto', 1/10);
console.log(uno.calcularGastodePercurso(70, 5));
console.log(palio.calcularGastodePercurso(70, 5));
