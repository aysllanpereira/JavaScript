class pessoa {

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

}


function compararPessoas(p1, p2) {

    if (p1.idade > p2.idade) {

        console.log(`${p1.nome} é mais velho que ${p2.nome}`);

    } else if (p2.idade > p1.idade) {

        console.log(`${p2.nome} é mais velho que ${p1.nome}`);

    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }

}

let aysllan = new pessoa('Aysllan', 23);
let kailana = new pessoa('Kailana', 21);

compararPessoas(aysllan, kailana);