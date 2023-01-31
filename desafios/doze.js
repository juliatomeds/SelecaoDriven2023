/*
Organiza os Selos
Uma certa pessoa da Driven gosta muito de selos. Ela guarda esses selos numa página e os posiciona de forma a montar um
retângulo completamente coberto e sem sobreposição.
Na figura abaixo, estão exibidas duas formas de organizar 6 selos:
Implemente a função ao lado que recebe o número de selos na coleção dessa pessoa e retorna a quantidade de formas de organizar os selos em retângulos.
Ex: Se for passado o número 4, o retorno esperado será 3. Pois podemos organizar os selos das seguintes formas:
 */
function organizaSelos(num) {
    //Primeiro tem que saber o comprimento da base
    //exemplo se for 4 tem
    console.log( "PRIMEIRA OPÇCAO")
    console.log("----")
    console.log( "SEGUNDA OPCAO")
    console.log("--")
    console.log("--")
    console.log( "TERCEIRA OPCAO")
    console.log("-")
    console.log("-")
    console.log("-")
    console.log("-")

    let result = 0;

    for (let i = 1; i <= Math.sqrt(num); i++) { //O objetivo desse loop é determinar todos os divisores inteiros do número especificado.
        //Se o resto da divisão for zero, isso significa que o número n é divisível por i, ou seja, podemos formar um
        // retângulo com as dimensões i e n / i.
        // Se o resto não for zero, não é possível formar um retângulo com as dimensões i e n / i.
        if (num % i === 0) {
            //O resultado é incrementado em 2 porque são duas possibilidades para organizar um retângulo: com as colunas
            // maiores ou menores do que as linhas. Por exemplo, se o número de selos for 6, pode ser organizado em um
            // retângulo 3x2 ou 2x3, sendo ambos válidos. Portanto, a contagem de formas é incrementada em 2 para cada
            // combinação válida.
            result += 2; //é o resultado
        }
    }

    //A estrutura de loop "for" acima começa com a variável "i" valendo 1 e incrementando até que "i" seja menor ou igual à
    // raiz quadrada do número de selos. Em cada iteração, o if verifica se o resto da divisão de "num" por "i" é igual a 0.
    // Se for, isso significa que "i" é um divisor de "num", então adicionamos 2 ao resultado (pois há um outro divisor
    // que é o resultado da divisão de "num" por "i").
    //
    // Por exemplo, para 4 selos:
    // Na primeira iteração, "i" é 1, e o resto da divisão de 4 por 1 é 0, então result += 2 (result = 2)
    // Na segunda iteração, "i" é 2, e o resto da divisão de 4 por 2 é 0, então result += 2 (result = 4)
    // Na terceira iteração, "i" é 3, e o resto da divisão de 4 por 3 é não é 0, então result não é modificado.
    // Neste ponto, a iteração acaba porque i>= sqrt(num), que nesse caso é 2.
    // Obs: o resultado é 2 vezes maior do que o esperado, pois o mesmo par de divisores é contado duas vezes,
    // por exemplo (1,4) e (4,1). Por isso é necessário decrementar o resultado se a raiz quadrada do número for inteira.

    if (Math.sqrt(num) % 1 === 0) {
        result--;
    }
    // verifica se a raiz quadrada do número de selos é um número inteiro.
    // Se for, então result é decrementado em 1.
    // Nesse exemplo, a raiz quadrada de 4 selos é 2, que é um número inteiro, então result é decrementado em 1.
    // Isso acontece porque a conta de duas formas de organizar selos em um retângulo quadrado é contada duas vezes.
    // Então, se o número de selos é um quadrado perfeito, a resposta final precisa ser decrementada em 1 para corrigir
    // a contagem dupla.

    return result;
}

console.log("Resultado: " + organizaSelos(4)); //3
//console.log(organizaSelos(5)); //2
//console.log(organizaSelos(6)); //4
//console.log(organizaSelos(8)); //5
//console.log(organizaSelos(9)); //3