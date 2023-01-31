//Último Par
//Implemente a função ao lado que recebe um array e retorna o último elemento par do array
function ultimoPar (arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            return arr[i];
        }
    }
    return null;
}

//Usar "==" para comparar igualdade é uma prática comum, mas é considerado melhor usar "===" que é uma comparação
// estrita de igualdade, verificando tanto o valor quanto o tipo do operando. No caso específico de comparar se um
// número é par, usar "===" é a melhor escolha, pois garante que o resultado seja o esperado.