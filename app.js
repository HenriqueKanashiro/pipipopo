alert('Boas vindas ao jogo do numero secreto!');
let multi = 600;
let numeroSecreto = parseInt(Math.random() * multi + 1);
let chute;
console.log(numeroSecreto);
let tentativa = 1;


while (chute != numeroSecreto) {
   chute = prompt(`Digite um numero de 1 a ${multi}`);
   if (chute == numeroSecreto){
        break;
   } else {
    if (chute > numeroSecreto) {
        alert(`O numero secreto é menor que ${chute}`);
    } else {
        alert(`O numero secreto é maior que ${chute}`);
    }
    // tentativa ++ significa -> tentativa = tentativa + 1;
    tentativa++;
   }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert('Parabens! voce acertou o numero secreto ' + numeroSecreto + ` com ${tentativa} ${palavraTentativa}`);