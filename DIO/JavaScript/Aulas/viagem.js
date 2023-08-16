function calcular() {

    let preco = parseFloat(document.getElementById("icomb").value);
    let capacidade = parseFloat(document.getElementById("icap").value);
    let gasto = parseFloat(document.getElementById("ikm").value);
    let distancia = parseFloat(document.getElementById("idis").value);
    let resultado = document.getElementById("res");

    let consumo = distancia / capacidade;
    let gasosa = preco / capacidade;
    let total = gasosa * distancia;
    let precoEtanol = 5.79;
    let precoGasolina = 6.66;
    let tipoCombutivel;

    
    if (preco <= precoEtanol) {

        tipoCombutivel = "Etanol";

    } else  {
        tipoCombutivel = "Gasolina";
    }   
    
    if (preco <= precoEtanol) {

        res.innerHTML = `Vou fazer uma viagem de ${distancia}km e a capacidade do tanque do meu carro é de ${capacidade} litros, irei gastar um total de R$${gasosa.toFixed(2)} por km percorrido, no total dessa viagem irei gastar R$${total.toFixed(2)}. O combustível usado foi ${tipoCombutivel}.`;

    } else {

        res.innerHTML = `Vou fazer uma viagem de ${distancia}km e a capacidade do tanque do meu carro é de ${capacidade} litros, irei gastar um total de R$${gasosa.toFixed(2)} por km percorrido, no total dessa viagem irei gastar R$${total.toFixed(2)}. O combustível usado foi ${tipoCombutivel}.`;

    }
}