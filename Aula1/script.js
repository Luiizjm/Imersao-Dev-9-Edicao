function conversor() {

    Wons = 0.004
    Euro = 6.20
    Dolar = 5.74

    moeda = prompt("Digite qual moeda quer converter = won, euro, dolar")
    valor = prompt("Digite o valor para ser convertido: ")

    if (moeda == "won") {
        resultado = valor * Wons
    }
    else if(moeda == "euro") {
        resultado = valor * Euro
    }
    else if (moeda == "dolar") {
        resultado = valor * Dolar
    }
    
    alert("R$ = " + resultado.toFixed(2))
}
