let num = [5, 8, 2, 9];

num.push(1)
num.sort();
console.log(num)
console.log(`Nosso vetor tem: ${num.length} posições`);
console.log(`O primeiro vetor é: ${num[0]}`);
let pos = num.indexOf(3);

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 5 está na posição ${pos}`);
}

