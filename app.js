let numeroMaximo = prompt ("Escola a dificuldade, escolha o numero maximo a ser gerado");
let listaDeNumerosSorteados = [];
let numeroLimite = numeroMaximo;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
textoInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function textoInicial(){
    exibirTextoNaTela('h1', 'Bem Vindo ao Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}



function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
       if ( chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
       }else {
        exibirTextoNaTela('p', 'O número secreto é maior');
       }
       tentativas++;
       limparCampo();
    }
   
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.lenght;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroMaximo = prompt ("Escola a dificuldade, escolha o numero maximo a ser gerado");
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo();
    tentativas = 1;
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}