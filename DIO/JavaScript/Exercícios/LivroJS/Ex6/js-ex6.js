var vetor = [];

function adicionarClubes() {

    var inClube = document.getElementById('inClube');

    var clube = inClube.value;

    if(clube === "") {
        alert("Por favor, insira um dado!");
        inClube.focus();
        return;
    }

    vetor.push({clube: clube});
    inClube.value = "";
    inClube.focus();

    listarClubes();

}

var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener("click", adicionarClubes);

function listarClubes() {
    if(vetor.length == 0) {
        alert("Informe um dado");
        return;
    }

    var lista = "";

    for( var i = 0; i < vetor.length; i++ ) {
        lista += (i + 1) + " - " + vetor[i].clube + "\n";
    }

    document.getElementById('outExibir').textContent = lista;

}

var btListar = document.getElementById('btListar');
btListar.addEventListener("click", listarClubes);

function mostrarTabela() {

    if(vetor.length === 0) {
        alert("Não há clubes na lista para exibir na tabela");
        return;
    }

    vetor.sort(function (a, b) {
        return a.clube.localeCompare(b.clube);
    });

    var primeiroColocado = vetor[0].clube;
    var ultimoColocado = vetor[vetor.length - 1].clube;

    var resultado = primeiroColocado + " x " + ultimoColocado;

    document.getElementById('outExibir').textContent = resultado;
}

var btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener("click", mostrarTabela);