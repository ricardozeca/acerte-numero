alert ("Boas vindas ao jogo do número secreto.");
let numeroSecreto = 13;
console.log (numeroSecreto)
let chute 

// enquanto chute não for igual ao numero secreto
while(chute != numeroSecreto){
    chute = prompt ("Escolha um numero entre 1 ou 50");
    // se chute for igual o número secreto
    if (chute == numeroSecreto){
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        alert("ERRROUUU");
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}` )
        }
    }
}
