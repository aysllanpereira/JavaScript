/* let nomes = ['kaio', 8, 10, 9];

console.log(nomes);

console.log(nomes.pop());

console.log(nomes); */

/* let notas = [];

notas.push(5);
notas.push(8);
notas.push(6);
notas.push(7);
notas.push(5);
notas.push(8);
notas.push(6);


let soma = 0;

for (let i = 0; i < notas.length; i++) {
    
    let nota = notas[i];
    soma = soma + nota; 
    
}

let media = soma / notas.length;
 console.log(media.toFixed(2)); */

/* let numero = 8;

for (let i = 1; i <= 10; i++) {
    console.log(i * numero);
    
} */

/* let numeros = [3, 7, 10];

for(let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if(numero % 2 === 0) {
        console.log(numero);
    }
} */ 

const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    if(numeroPar) {
        numerosPares.push(i);
    }
}

console.log(numerosPares);

