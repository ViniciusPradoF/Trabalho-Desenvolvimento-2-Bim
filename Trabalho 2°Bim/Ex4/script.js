let inpSalario = document.querySelector("#inpSalario")
let inpCod = document.querySelector("#inpCod")
let elCargo = document.querySelector("#Cargo")
let salAntigo = document.querySelector("#salAntigo")
let salNovo = document.querySelector("#salNovo")
let elAumento = document.querySelector("#Aumento")

function calculoSalario() {
    let Salario = Number(inpSalario.value)
    let Codigo = Number(inpCod.value)

    let valorAumento
    let nomeCargo

    if (Codigo === 101) {
        valorAumento = Salario / 10
        nomeCargo = "Gerente"
    } else if (Codigo === 102) {
        valorAumento = Salario / 5
        nomeCargo = "Engenheiro"
    } else if (Codigo === 103) {
        valorAumento = Salario * 30 / 100
        nomeCargo = "Tecnico"
    }

    elCargo.innerHTML = nomeCargo
    salAntigo.innerHTML = Salario + " Reais"
    salNovo.innerHTML = (valorAumento + Salario) + " Reais"
    elAumento.innerHTML = valorAumento + " Reais"
}

inpCod.onchange = function() {
    setTimeout(function() {
        calculoSalario()
    }, 2000)
}
