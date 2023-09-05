class Pessoa {

    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {

        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    calcularImc() {

        return this.peso / (this.altura * this.altura);

    }

    classificarImc() {

      let imc = this.calcularImc();

      if(imc < 18.5) {
        return ('Abaixo do peso!');
      } else if (imc >= 18.5 && imc < 25) {
        return ('Peso nomal!');
      } else if (imc >= 25 && imc < 30) {
        return ('Acima do peso!');
      } else if (imc >= 30 && imc < 40) {
        return ('Obeso!');
      } else {
        return ('Obesidade Grave!');
      }

    }
    

} 

function calcular() {

  let nomeDaPessoa = document.getElementById('inome').value;
  let pesoKg = parseFloat(document.getElementById('ipeso').value);
  let alt = parseFloat(document.getElementById('ialt').value);
  

  let pessoa = new Pessoa(nomeDaPessoa, pesoKg, alt);
  let imc = pessoa.calcularImc();
  let classificacao = pessoa.classificarImc();

  let verificar = document.getElementById('verificar');

  verificar.innerHTML = `${nomeDaPessoa} o seu IMC é: ${imc.toFixed(2)} <br> Classificação: ${classificacao}`;
  
} 



/* let jose = new Pessoa('Jose', 70, 1.75);
let aysllan = new Pessoa('Aysllan', 83, 1.74);


console.log(jose.classificarImc());
console.log(aysllan.classificarImc()); */