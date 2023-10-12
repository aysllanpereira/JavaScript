

function calcular() {
    // entradas convertidas 
    let contrato = parseInt(document.getElementById("icontrato").value)
    let dataQuitacao = moment(document.getElementById("idata").value);
    let prazo = parseFloat(document.getElementById("iprazo").value);
    let valorPago = parseFloat(document.getElementById("ivalor").value);
    let dataDoDia = moment(document.getElementById("idatadodia").value);
   

    // calculos 
    let multiplicar = (valorPago * 0.01);
    let diasEmAtraso = dataDoDia - dataQuitacao;
    let diferencaEmDias = Math.floor(Math.abs(diasEmAtraso) / (1000 * 60 * 60 * 24));
    let final = (multiplicar / prazo) * diferencaEmDias;

    // se não informar um valor correto, irá exibir um alerta
    if(isNaN(prazo)) {
        alert("Por favor, insira um valor numérico válido para o prazo");
        return;
    }
    // adicionando o prazo 
   dataQuitacao.add(prazo, 'days');
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `O resultado é: ${dataQuitacao.format("DD/MM/YYYY")} e está a ${diferencaEmDias} dias em atraso e o valor é: ${final.toFixed()}`;
}