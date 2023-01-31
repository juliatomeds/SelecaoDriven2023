//Curso teórico
function apresentar(nome) {
    let texto = "Olá" + nome;
    return texto;
}
apresentar("Júlia Tomé")
function calcularMedia(nota1, nota2, nota3) {
    let media = ((nota1 * 3) + (nota2 * 3) +  (nota3 * 4))/10;
    let resultado = "Sua média foi: " + media;
    return resultado;
}
calcularMedia(5,5,10)

//Atividades------------------------------------------------------------------------------------------------------------'
//Hello World
//Implemente a função ao lado, que retorna a string "Hello World"
function helloWorld() {
    let texto = "Hello World";
    return texto;
}
//Concatenar
//Implemente a função ao lado, que retorna a concatenação dos dois parâmetros que ela recebe
function concatenar(texto1, texto2) {
    let texto = texto1 + texto2;
    return texto;
}

//Somar Números
//Implemente a função ao lado, que soma dois números e retorna o texto A soma deu: x, sendo x o resultado da soma
function somar(num1, num2) {
    let soma = num1 + num2;
    let resultado = "A soma deu: " + soma;
    return resultado;
}