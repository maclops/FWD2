var click = false;
// 0 = pensativo, 1 assustado, 2 = alegre, 3 = nervoso
var g_personagem = 0;

function analisarImagem(clicouImg, mensagem) {
    var garoto = '';

    if (clicouImg) {
        garoto = 'Alegre';
        g_personagem = 2;
        setTimeout(function() {
            document.querySelector('#texto').innerHTML = 'Gosto quando você interage comigo'
        }, 0);
        clearTimeout('garoto', 100);
    }
    else {
        switch (g_personagem) {
            case 0: // pensativo
                garoto = 'Assustado';  
                g_personagem = 1;
            break;
            case 1: // assustado
                garoto = 'Pensativo';
                g_personagem = 0;
            break;
            case 2:
                garoto = 'Alegre';
                g_personagem = 2;
            break;
        }
    }
    document.querySelector('#figura').src = './imagens/'+garoto+'.png';
}



// function carregarAssustado() {
//     var personagem = document.querySelector('#figura');
//     if (click == false) {
//         personagem.src = './imagens/Assustado.png';
//     }
// }

// function carregarPensativo() {
//     var personagem = document.querySelector('#figura');
//     if (click == false) {
//         personagem.src = './imagens/Pensativo.png';
//     }
// }

// function carregarAlegre() {
//     var personagem = document.querySelector('#figura');
//     personagem.src = './imagens/Alegre.png';
//     click == true;
// }