/*
Torre na Captura
No xadrez, a torre é uma peça que anda quantas casas ela quiser tanto na horizontal quanto na vertical, como na imagem
abaixo. Além disso, uma peça captura outra peça se elas ocuparem a mesma posição no tabuleiro.
Implemente a função ao lado que recebe 2 strings, a posição onde está a sua torre e a posição onde está a peça do
adversário e deve retornar “Sim” caso a torre consiga capturar a peça do adversário com apenas 1 movimento ou “Não”
caso contrário.

Exemplo:
Se for passado posicaoTorre=11 e posicaoAdversario=31, a função deve retornar “Sim”. Nesse caso, a torre pode se deslocar
ao longo da coluna 1 e chegar na posição da outra peça.
Se for passado posicaoTorre=11 e posicaoAdversario=14, a função deve retornar “Sim”. Nesse caso, para a torre pode se
deslocar ao longo da linha 1 e chegar na posição da outra peça.
Se for passado posicaoTorre=11 e posicaoAdversario=22, a função deve retornar “Não”. Nesse caso, não tem como a torre se
deslocar apenas em 1 linha ou em 1 coluna e chegar na posição da outra peça.

Observação:
a posição das peças será dada no formato “xy” onde x representa a linha em que a peça está e y a coluna que a peça está,
 ou seja, a posição “12” significa que a peça está na 1a linha e na 2a coluna
 */
function xadrez(posicaoTorre,posicaoAdversario){
    let linhaTorre = posicaoTorre[0]; //x
    let colunaTorre = posicaoTorre[1]; //y
    let linhaAdversario = posicaoAdversario[0]; //x
    let colunaAdversario = posicaoAdversario[1]; //y

//como a torre anda quantas casas quiser, mas apenas uma reta então a coluna e a linha precisam ser iguais
    if (linhaTorre === linhaAdversario || colunaTorre === colunaAdversario) {
        return "Sim";
    } else {
        return "Não";
    }
}