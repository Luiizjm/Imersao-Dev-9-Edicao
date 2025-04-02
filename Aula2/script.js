function jogar() {

    // idade = prompt("Digite sua idade: ")

    // if(idade < 18) {
    //    alert("Você é menor de idade, não podera jogar esse jogo!")
    // }

    // if (idade >= 18) {
        escolhaJogador = prompt("Escolha sua mão: 1-Pedra, 2- Papel, 3-Tesoura")
        escolhaComputador = Math.floor(Math.random() * 3) + 1

        // escolhaJogador pedra -- escolhaComputaor pedra
        //  escolhaJogador papel -- escolhaComputaor papel
        // escolhaJogador tesoura -- escolhaComputaor tesoura

        if(escolhaJogador == escolhaComputador) {
            alert("Empate, Tente novamente! Escolha do Computador: " + escolhaComputador)
        }

        // escolhaJogador pedra -- escolhaComputaor papel = computador vence
        //  escolhaJogador pedra -- escolhaComputaor tesoura = jogador vence
        
        if(escolhaJogador == 1){
            if(escolhaComputador == 2){
                alert("Computador Venceu! Escolha do Computador: " + escolhaComputador)
            }
            if(escolhaComputador == 3){
                alert("Jogador venceu! Escolha do Computador: " + escolhaComputador)
            }
        }

        // escolhaJogador papel -- escolhaComputaor pedra = jogador vence
        // escolhaJogador papel -- escolhaComputaor tesoura = computador vence

        if(escolhaJogador == 2){
            if(escolhaComputador == 1){
                alert("Jogador venceu! Escolha do Computador: " + escolhaComputador)
            }
            if(escolhaComputador == 3){
                alert("Computador Venceu! Escolha do Computador: " + escolhaComputador)
            }
        }

        // escolhaJogador tesoura -- escolhaComputaor pedra = computador vence
        // escolhaJogador tesoura -- escolhaComputaor papel = jogador vence

        if(escolhaJogador == 3){
            if(escolhaComputador == 1){
                alert("Computador venceu! Escolha do Computador: " + escolhaComputador)
            }
            if(escolhaComputador == 2){
                alert("Computador Venceu! Escolha do Computador: " + escolhaComputador)
            }
        }
        
    // }

    



}