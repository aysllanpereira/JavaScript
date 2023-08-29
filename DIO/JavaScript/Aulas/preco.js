function aplcarDesconto(valor, desconto) {

    return (valor - (valor * (desconto / 100)));

}


function aplicarJuros(valor, parceladoMaisdeDuasx) {

    return (valor + (valor * (parceladoMaisdeDuasx / 100)));

}


function calcular () {

    let produto = document.getElementById("iprod").value;
    let valor = parseFloat(document.getElementById("ipreco").value);
    let desconto = parseFloat(document.getElementById("idesconto").value);
    let formaPagamento = document.getElementById("ipaga").value;
    let resultado = document.getElementById("res");
 
    let debito = "Debito";
    let dinheiroPix = "Dinheiro";
    let parceladoDuasx = "Parcelado 2x";
    let parceladoMaisdeDuasx = "Parcelado mais de 2x";

    if (formaPagamento === debito) {
        resultado.innerHTML = `O preço original do(a) ${produto} é R$${valor} e com o nosso desconto de 10% na forma de pagamento à vista/débito, fica por R$${aplcarDesconto(valor, 10)}`;
    } else if (formaPagamento === dinheiroPix) {
        resultado.innerHTML = `O preço original do(a) ${produto} é R$${valor} e com o nosso desconto de 15% na forma de pagamento em dinheiro/pix, fica por R$${aplcarDesconto(valor, 15)}`;
    } else if (formaPagamento === parceladoDuasx) {
        resultado.innerHTML = `O preço original do(a) ${produto} é R$${valor} e na forma de pagamento parcelado fica 2x de R$${valor / 2}`;
    } else {
        resultado.innerHTML = `O preço original do(a) ${produto} é R$${valor} e na forma de pagamento parcelado em mais de 2x, fica o valor total de R$${aplicarJuros(valor, 10)}`
    }

}