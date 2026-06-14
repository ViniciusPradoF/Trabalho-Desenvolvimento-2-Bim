let Ano = document.querySelector("#Ano")
let Valor = document.querySelector("#Valor")
let Resultado = document.querySelector("#Resultado")


function calculoImposto(){
    let anoVeiculo = Number(Ano.value)
    let valorVeiculo = Number(Valor.value)
    let valorImposto
    if(anoVeiculo < 1990)
        { valorImposto = valorVeiculo / 100}
    else if(anoVeiculo >= 1990)
        {valorImposto = valorVeiculo * 1.5 / 100}

   Resultado.innerHTML = valorImposto.toFixed(2) + " Reais"
}

Valor.onchange = function() {
    setTimeout(function() {
        calculoImposto()
    }, 2000)
}

