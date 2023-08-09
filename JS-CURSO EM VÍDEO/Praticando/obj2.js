function verificar() {

    let nome = document.getElementById("inome").value;
    let n1 = parseInt(document.getElementById("in1").value);
    let n2 = parseInt(document.getElementById("in2").value);
    let res = document.getElementById("res");


    res.innerHTML = `${nome} tem ${n1} anos de idade e pesa ${n2}kg.`;

}