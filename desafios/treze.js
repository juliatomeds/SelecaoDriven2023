/*
Vogal mais perto
Implemente a função ao lado que recebe uma string e retorna um array contendo a distância de cada letra da string original
para a vogal mais próxima no alfabeto.
Exemplo: Se for passada a palavra uva, o retorno esperado é [0,1,0] pois “u” e “a” são vogais então a distância é 0.
A vogal mais próxima de “v” é a letra “u” que fica a 1 letra de distância.
Exemplo: Se for passada a palavra “faz”, o retorno esperado é [1,0,5]. A vogal mais perto de “f” é a letra “e” com 1 letra
de distância. A letra “a” já é uma vogal, logo a distância é 0. A vogal mais perto da letra “z” é a letra “u” que
dista 5 letras do “z”.

Dicas:
Você pode achar útil criar uma variável que represente o alfabeto como abaixo:
let alfabeto=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
Você pode achar útil calcular o módulo de um número. Caso queira calcular o módulo de “-5” basta fazer Math.abs(-5)
 */
function distanciaDaVogal(str) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let distance = Infinity;
        for (let j = 0; j < vogais.length; j++) {
            let vowel = vogais[j];
            let indexDifference = Math.abs(vogais.indexOf(char) - vogais.indexOf(vowel));
            if (indexDifference < distance) {
                distance = indexDifference;
            }
        }
        result.push(distance);
    }
    return result;
}

console.log(distanciaDaVogal("uva")); //[ 0, 1, 0 ]
console.log(distanciaDaVogal("faz")); //[ 1, 0, 1 ]