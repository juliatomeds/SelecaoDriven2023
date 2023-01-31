//Repetir Texto
//Implemente a função ao lado, que retorna uma string no formato abc,abc,abc,fim, sendo "abc" o texto passado por parâmetro e a quantidade de vezes que ele se repete o número passado no parâmetro repetições.
//Exemplo: deve retornar la,la,la,fim quando passamos o texto="la" e repeticoes=3.
function repetirTexto (texto, repeticoes) {
    let resultado = '';
    for (let i = 0; i < repeticoes; i++) {
        resultado += texto + ',';
    }
    return resultado + 'fim';
}