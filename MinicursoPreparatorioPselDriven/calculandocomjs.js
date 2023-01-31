//Curso teórico
function mediafunction(num1, num2) {
    let resultado = (num1 + num2)/2;
    return resultado;
}
mediafunction (2,4);

let soma = 10 + 2;             // Resultado: 12
let subtracao = 10 - 2;        // Resultado: 8
let multiplicacao = 10 * 2;    // Resultado: 20
let divisao = 10 / 2;          // Resultado: 5
let media = (10 + 2) / 2;      // Resultado: 6
let media = 10 + 2 / 2; // Sem os parênteses daria 11
let decimal = 2.5;
let divisao = 10 / 4;        // Resultado: 2.5
let resto = 10 % 3;          // Resultado: 1, pois o resto de 10 dividido por 3 é 1.
//Dica: isso é muito útil pra saber se um número é par ou ímpar. Basta olhar o resto da divisão dele por 2. Se for 0, ' +
//é par. Se for 1 é ímpar. 😉

//Atividades------------------------------------------------------------------------------------------------------------'

//Média
//Implemente a função ao lado, que calcula a média simples entre 2 números
function media(num1, num2) {
    let resultado = (num1 + num2) / 2;
    return resultado;
}

//Calcula Resto
//Implemente a função ao lado, que retorna o resto da divisão entre 2 números
function calculaResto(num1, num2){
    let resultado = num1 % num2;
    return resultado;
}