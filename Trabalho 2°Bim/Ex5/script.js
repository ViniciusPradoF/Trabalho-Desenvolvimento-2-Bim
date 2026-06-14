
//coloquei apenas input de nome pois tem so um inp professor, 
// nao esqueci de seu ensinamento de colocar nomes coerentes kk
let input = document.querySelector("#inputSaldo")
let Resultado = document.querySelector("#Resultado")
let SaldoMedio = document.querySelector("#saldoMedio")

function calculo() {
    let Saldo = Number(input.value)

    if (Saldo < 0) {
        Resultado.innerHTML = "Sem credito disponivel"
        SaldoMedio.innerHTML = "0 Reais"
    } else if (Saldo > 0 && Saldo <= 200) {
        Resultado.innerHTML = "Sem credito disponivel"
        SaldoMedio.innerHTML = Saldo + " Reais"
    } else if (Saldo >= 201 && Saldo <= 400) {
        Resultado.innerHTML = Saldo * 20 / 100 + " Reais"
        SaldoMedio.innerHTML = Saldo + " Reais"
    } else if (Saldo >= 401 && Saldo <= 600) {
        Resultado.innerHTML = Saldo * 30 / 100 + " Reais"
        SaldoMedio.innerHTML = Saldo + " Reais"
    } else if (Saldo >= 601) {
        Resultado.innerHTML = Saldo * 40 / 100 + " Reais"
        SaldoMedio.innerHTML = Saldo + " Reais"
    }
}

input.onchange = function() {
    setTimeout(function() {
        calculo()
    }, 2000)
}