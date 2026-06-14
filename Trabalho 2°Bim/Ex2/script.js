let Peso = document.querySelector("#Peso")
let Altura = document.querySelector("#Altura")
let btCalcular = document.querySelector("#btCalcular")
let Resultado = document.querySelector("#Resultado")

function calculoIMC (){
    let Kg = Number(Peso.value);
    let M = Number(Altura.value);

    let Calculo = Kg / (M * M)
    
    if(Calculo < 18.5)
        {Resultado.innerHTML = "Abaixo do Peso"}

    else if(Calculo > 18.5 && Calculo <=24.9)
        {Resultado.innerHTML = "Peso Normal"}

    else if(Calculo > 25 && Calculo <= 29.9 )
        {Resultado.innerHTML = "Sobrepeso"}

    else if(Calculo > 30 && Calculo <= 34.9)
        {Resultado.innerHTML = "Obesidade grau 1"}

    else if(Calculo > 35 &&  Calculo <= 39.9)
        {Resultado.innerHTML = "Obesidade grau 2"}

    else if(Calculo > 40)
        {Resultado.innerHTML = "Obesidade grau 3"}
}

btCalcular.onclick = function(){
    calculoIMC()
}