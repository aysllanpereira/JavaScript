let pessoa = {

    nome: 'Aysllan Pereira',
    idade: 22,

    descrever: function () {

        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos!`);
    }

};

let atributo = 'idade';

console.log(pessoa['idade']);

