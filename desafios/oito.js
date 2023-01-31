/*
Junta Tudo
Implemente a função ao lado que recebe um array de strings e retorna uma única string concatenando os elementos do array, mas deixando cada elemento separado por “-” como no exemplo abaixo.
Exemplo: Se for passado o array arr=[”pessoa”,”amor”,”titulo”], a função deve retornar “pessoa-amor-titulo”
Exemplo: Se for passado o array arr=["tchau"], a função deve retornar "tchau"
 */
function juntaTudo (arr) {
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        string += arr[i];
        if (i < arr.length - 1) {
            string += '-';
        }
    }
    return string;
}
console.log(juntaTudo(['a', 'b', 'c', 'd']));

function juntaTudo2(arr) {
    return arr.join("-");
}
console.log(juntaTudo2(['a', 'b', 'c', 'd']));