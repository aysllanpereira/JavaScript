class Pessoa {

    nome;
    idade;
    anoDataNascimento;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDataNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}


let aysllan = new Pessoa('Aysllan', 23);

let kailana = new Pessoa('Kailana', 21);

console.log(aysllan);

