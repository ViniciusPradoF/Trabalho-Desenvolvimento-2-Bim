//Divs
let Parte1 = document.querySelector("#Parte1")
let Parte2 = document.querySelector("#Parte2")

//Angulos  botao e resultado
let Angulo1 = document.querySelector("#Angulo1")
let Angulo2 = document.querySelector("#Angulo2")
let Angulo3 = document.querySelector("#Angulo3")
let btCalcular = document.querySelector("#btCalcular")
let Resultado = document.querySelector("#Resultado")


//Logica dos Angulos / tira a Parte1 e coloca a Parte2
function calculoAngulos() {

    document.getElementById("Parte2").style.display = "block";
    document.getElementById("Parte1").style.display = "none";

    let Ang1 = Number(Angulo1.value);
    let Ang2 = Number(Angulo2.value);
    let Ang3 = Number(Angulo3.value);

    if (Ang1 + Ang2 < Ang3 || Ang1 + Ang3 < Ang2 || Ang2 + Ang3 < Ang1) 
        { Resultado.innerHTML = "Estes angulos nao formam um triangulo" }

    else if (Ang1 === Ang2 && Ang2 === Ang3) 
        { Resultado.innerHTML = "Dados os angulos este &eacute um triangulo EQUILATERO" }


    else if (Ang1 === Ang2 || Ang1 === Ang3 || Ang2 === Ang3) 
        { Resultado.innerHTML = "Dados os angulos este &eacute um triangulo ISOSCELES" }


    else if (Ang1 !== Ang3 && Ang1 !== Ang3 && Ang2 !== Ang3) 
        { Resultado.innerHTML = "Dados os angulos este &eacute um triangulo ESCALENO" }
}

//funcao de aparecer o calculo
btCalcular.onclick = function () {
    calculoAngulos()
}
