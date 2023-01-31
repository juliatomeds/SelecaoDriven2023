/*
Soma MinMax
Implemente a função ao lado para que ela seja capaz de executar o seguinte comando:
    Dada uma array com 5 inteiros positivos, ache o valor mínimo e o valor máximo que pode ser calculado somando exatamente quatro dos cinco números dessa array.
    Sua função deve retornar uma lista, com dois elementos, o primeiro deve ser o valor encontrado para a soma mínima e o segundo deve ser o valor encontrado para a soma máxima.
    Exemplo:
Se for passado lst = [5, 2, 3, 4, 1] então sua função deve retornar [10, 14].
    Pois 10 é o menor valor que pode ser obtido somando 4 dos 5 valores e 14 é o maior valor que pode ser obtido somando 4 dos 5 valores no array lst.
    Observação:
Podem existir números repetidos nessa array.
 */
function miniMaxSum(lst){
    let mintomax = lst.slice().sort((a, b) => a - b); //Do menor pro maior
    console.log(mintomax);
    let minSum = 0;
    for (let i = 0; i < mintomax.length - 1; i++) {
        minSum += mintomax[i];
    }

    let maxtomin = lst.slice().sort((a, b) => b - a); //Do maior pro menor
    console.log(maxtomin);
    let maxSum = 0;
    for (let i = 0; i < maxtomin.length - 1; i++) {
        maxSum += maxtomin[i];
    }
    return [minSum, maxSum];
}
console.log(miniMaxSum([5, 2, 3, 4, 44]));