//Curso teórico
function verificarAprovacao(nota1, nota2, nota3,faltas) {
    let media = (nota1 + nota2 + nota3) / 3;
    let aprovadoMedia = (media >= 7);
    let aprovadoPresenca = (faltas < 7);

    //if(media>= 7 && faltas<10) {
    if (aprovadoMedia && aprovadoPresenca) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}
verificarAprovacao(5,5,5,5)
function classificado(notaVestibular, notaEnem) {
    let aprovadoVestibular = (notaVestibular > 8);
    let aprovadoEnem = (notaEnem > 700);

    if (aprovadoVestibular || aprovadoEnem) {
        return "Classificado";
    } else {
        return "Desclassificado";
    }

    if (!aprovadoVestibular){
        return "Não foi aprovado no Vestibular";
    }

    if (!aprovadoEnem){
        return "Não foi aprovado no Enem";
    }
}
classificado(9,600)

//Atividades------------------------------------------------------------------------------------------------------------'
//Cade meu Desconto?
//Implemente a função ao lado, que recebe um preço e um booleano indicando se já está com desconto ou não.
// Se o preço for maior que 100 e não estiver com desconto, a função deve retornar Quero pechinchar.
// Caso contrário, deve retornar Negócio fechado
function pecoDesconto(preco, estaComDesconto) {
    let precoalto = (preco > 100);

    if (precoalto && !estaComDesconto) {
        return "Quero pechinchar";
    } else {
        return "Negócio fechado";
    }
}

//Verifica faltas
//Implemente a função ao lado, que recebe uma nota e um número de faltas e retorna Aprovado caso a média seja maior
// ou igual a 7 e o número de faltas menor que 10, ou Reprovado caso contrário.
function aprovado(nota, faltas) {
    if ( nota >= 7 && faltas < 10) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

//Tem Negativo?
//Implemente a função ao lado, que recebe 3 números e retorna Tem negativo! caso pelo menos 1 deles seja menor que 0.
// Caso contrário, ela deve retornar Tudo positivo!
function tudoPositivo(num1, num2, num3) {
    if (num1 < 0 || num2 < 0 || num3 < 0) {
        return "Tem negativo!";
    } else {
        return "Tudo positivo!";
    }
}