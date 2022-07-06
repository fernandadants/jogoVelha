let jogadorAtual = {};
let jogadas = [];
let jogo = {
    q1: document.querySelector('.q1'),
    q2: document.querySelector('.q2'),
    q3: document.querySelector('.q3'),
    q4: document.querySelector('.q4'),
    q5: document.querySelector('.q5'),
    q6: document.querySelector('.q6'),
    q7: document.querySelector('.q7'),
    q8: document.querySelector('.q8'),
    q9: document.querySelector('.q9')
}

let jogadorX = {valor: 'X'}
let jogadorO = {valor: 'O'}

jogadorAtual = jogadorX;

jogo.q1.addEventListener('click', (e)=>{jogada(e, 1);});
jogo.q2.addEventListener('click', (e)=>{jogada(e, 2);});
jogo.q3.addEventListener('click', (e)=>{jogada(e, 3);});
jogo.q4.addEventListener('click', (e)=>{jogada(e, 4);});
jogo.q5.addEventListener('click', (e)=>{jogada(e, 5);});
jogo.q6.addEventListener('click', (e)=>{jogada(e, 6);});
jogo.q7.addEventListener('click', (e)=>{jogada(e, 7);});
jogo.q8.addEventListener('click', (e)=>{jogada(e, 8);});
jogo.q9.addEventListener('click', (e)=>{jogada(e, 9);});

function  validarJogada(){
    let valor = jogadorAtual.valor;

    if(_estrategia_1(valor) ||
        _estrategia_2(valor) || 
        _estrategia_3(valor) ||
        _estrategia_4(valor) ||
        _estrategia_5(valor) ||
        _estrategia_6(valor) ||
        _estrategia_7(valor) ||
        _estrategia_8(valor)){

        return true;
    }

    return false;      
}

function _estrategia_1(valor){return (jogadas[1] == valor && jogadas[2] == valor && jogadas[3] == valor);}
function _estrategia_2(valor){return (jogadas[4] == valor && jogadas[5] == valor && jogadas[6] == valor);}
function _estrategia_3(valor){return (jogadas[7] == valor && jogadas[8] == valor && jogadas[9] == valor);}
function _estrategia_4(valor){return (jogadas[1] == valor && jogadas[4] == valor && jogadas[7] == valor);}
function _estrategia_5(valor){return (jogadas[2] == valor && jogadas[5] == valor && jogadas[8] == valor);}
function _estrategia_6(valor){return (jogadas[3] == valor && jogadas[6] == valor && jogadas[9] == valor);}
function _estrategia_7(valor){return (jogadas[1] == valor && jogadas[5] == valor && jogadas[9] == valor);}
function _estrategia_8(valor){return (jogadas[3] == valor && jogadas[5] == valor && jogadas[7] == valor);}

function _marcarJogada(e, indice){
    e.target.textContent = jogadorAtual.valor;
    jogadas[indice] = jogadorAtual.valor;
}

function jogada(e, indice){

    _marcarJogada(e, indice);

    if(validarJogada()){
        setTimeout(() =>{
            alert("Partida encerrada!");
            _atualizarPainel();
            _reiniciarJogo();
        }, 100)
        return;
    }

    if(jogadas.filter(e => e).length == 9){

        setTimeout(()=>{
            alert('Deu velha ಠ_ಠ');
            _reiniciarJogo();
        },100)

        return;
    }
    
    // Reiniciar jogo
    jogadorAtual = (jogadorAtual == jogadorX) ? jogadorO : jogadorX;
}

function _reiniciarJogo(){

    jogadas = [];
    jogo.q1.textContent = '';
    jogo.q2.textContent = '';
    jogo.q3.textContent = '';
    jogo.q4.textContent = '';
    jogo.q5.textContent = '';
    jogo.q6.textContent = '';
    jogo.q7.textContent = '';
    jogo.q8.textContent = '';
    jogo.q9.textContent = '';
}

function _atualizarPainel(){
    jogadorAtual = (jogadorAtual == jogadorX) ? jogadorO : jogadorX;
}