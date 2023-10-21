alert ("Boas vindas ao jogo do número secreto.");
let numeroMaximo = 100;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao numero secreto
while(chute != numeroSecreto){
    chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual o número secreto
    if (chute == numeroSecreto) {
        break;
        
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}` );
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
//if (tentativas > 1) {
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}

