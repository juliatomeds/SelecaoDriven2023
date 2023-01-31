//Curso teórico
function umbridge() {
    let contador = 0;
    let frase = "";
    while (contador < 100){
        frase += "Não devo contar mentiras";
        contador++;
    }

    for (let contador = 0; contador < 100; contador ++){

    }
}
umbridge();
//Atividades------------------------------------------------------------------------------------------------------------'

//RepetidoRepetido
//Utilizando loops, implemente a função ao lado que recebe um texto e retorna uma string com o texto repetido 10 vezes.
function vezes10(texto) {
    let contador = 0;
    let resultado = "";
    while (contador < 10) {
        resultado += texto;
        contador++;
    }
    return resultado;
}

//Multiplica Aí
// Utilizando loops, implemente a função ao lado que recebe um texto e um número de repetições. Ela deve retornar
// uma string com o texto repetido n vezes, sendo n o número de repetições.
function multiplica(texto, repeticoes) {
    let contador = 0;
    let resultado = "";
    while (contador < repeticoes) {
        resultado += texto;
        contador++;
    }
    return resultado;
}