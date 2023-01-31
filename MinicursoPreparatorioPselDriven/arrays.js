//Curso teórico
function teste() {
    let alunos = ["Ana","Bia","Carlos"];
    let texto = "";

    return alunos[1]; //Começa o index por zero
    for (let i = 0; i < alunos.length; i ++){
        texto += alunos[i];
    }
}
teste ();

function somarTodos(lista){
    let soma = 0;
    for (let i = 0; i < lista.length; i ++){
        soma += lista[i];
    }
    return soma;
}
somarTodos([10,20,30]);

let aluno1 = "Ana";
let aluno2 = "Bia";
let aluno3 = "Carlos";
let alunos = ["Ana","Bia","Carlos"];

//Atividades-----------------------------------------------------------------------------------------------------------'
//Lista de Nomes
//Implemente a função ao lado que recebe 3 nomes e retorna esses nomes em uma array.
function listar(nome1, nome2, nome3) {
    return [nome1, nome2, nome3];
}

//Dobrar a meta
//Implemente a função ao lado que recebe uma array e retorna a soma de todos os seus números multiplicados por 2.
function dobraASoma(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]*2;
    }
    return soma;
}

//Qual o Maior Indice
//Implemente a função ao lado que recebe uma array de números positivos diferentes entre si e retorna o índice do maior
// número encontrado.
//Exemplo: se a array for [10,50,30], o maior número é o 50, então a função deve retornar o índice 1.
//Lembre-se que os índices das arrays começam em 0.
function maiorIndice(lista) {
    let indice = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > lista[indice]){
            indice = i;
        }
    }
    return indice;
}

//Avançar os Dias
//Implemente a função ao lado que vai retornar qual o dia da semana vai ser a partir de um dia passado como string e de
// uma quantidade de dias a ser avançado. Para isso, a função deve receber uma string e um número como parâmetros e
// retornar uma string.
//Obs: os dias devem ser retornados no seguinte formato
//"Segunda-feira, Terca-feira, Quarta-feira, Quinta-feira, Sexta-feira, Sabado, Domingo"
//Se for passado “Segunda-feira” e 5: a função deve retornar “Sabado”, pois avançar 5 dias a partir da segunda-feira cai no sábado.
//Se for passado “Segunda-feira” e 8, a função deve retornar “Terca-feira”, pois avançar 8 dias a partir da segunda-feira
// cai na terça-feira da semana seguinte.
function avancarDias(dia, quantidade) {
    let dias = ["Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"];

    let indice = 0;
    for (let i = 0; i < dias.length; i++) {
        if (dias[i] === dia) {
            indice = i;
        }
    }

    indice = (indice + quantidade) % 7;

    return dias[indice];
}

//Intervalos Pares
//Implemente a função ao lado que recebe 3 números como parâmetros. Os dois primeiros delimitam um intervalo. A função
// deve retornar um array contendo os menores números pares dentro do intervalo. A quantidade de elementos nesse array
// deve ser igual ao 3o parâmetro passado
//Obs:O 1o parâmetro sempre será menor que o 2o parâmetro
//No intervalo passado sempre haverá números pares suficientes para a quantidade passada
//A função deve retornar os menores números pares possíveis dentro do intervalo
//Exemplo: se for passado os valores “2”, “10”, “3”, a função deve retornar o array [4,6,8]
//Exemplo: se for passado os valores “2”, “10”, “2”, a função deve retornar o array [4,6]
//Dica: para realizar essa questão você vai precisar de uma ferramenta nova. Talvez seja útil construir um array vazio.
// Você pode fazer isso com o seguinte comando:
//const arr =[]//constrói um array vazio chamado “arr”
//Depois disso, você, talvez, queira encher esse novo array com elementos. Você pode fazer isso escrevendo “.push” logo
// após o nome do array. Então, para inserir o número “3” no array que acabamos de criar fazemos:
//arr.push(3)//Insere o número 3 dentro do array “arr”
function intervaloPares(inicio, fim, quantidade) {
    let pares = [];
    let numero = inicio;
    while (pares.length < quantidade) {
        numero++; //coloca isso aqui pois quer que começe após o inicio, se o inicio for par, não é pra começar por ele
        if (numero % 2 == 0) {
            pares.push(numero)
        }
    }
    return pares
}
console.log(intervaloPares(2,10,3));