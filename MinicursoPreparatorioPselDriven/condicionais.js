//Curso teórico
function aprovadoOuReprovado(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;

    let auxiliar = (media < 5);   // Vai armazenar true ou false na variável "passou", dependendo do resultado da comparação

    if(auxiliar) {
        return "Reprovado";
    } else if (media < 7) {
        return "Prova final";
    }
    else {
        return "Reprovado";
    }
}
aprovadoOuReprovado (5,5,10)

function verificarAprovacao(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;

    let passou = (media > 7);   // Vai armazenar true ou false na variável "passou", dependendo do resultado da comparação

    if(passou) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}
verificarAprovacao(5,5,10)

//Atividades------------------------------------------------------------------------------------------------------------'

//É Maior de Idade?
//Implemente a função ao lado, que retorna Maior de idade caso a idade passada seja maior que 17 ou Menor de idade caso contrário.
function maiorDeIdade(idade) {
    let auxiliar = (idade > 17);
    if (auxiliar) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

//Foi Aprovado?
//Implemente a função ao lado, que retorna Aprovado caso a nota passada seja maior ou igual a 7, Prova Final caso seja
// maior ou igual a 5 porém menor que 7 ou Reprovado caso contrário.
function situacao(nota) {
    let auxiliar = nota < 5;
    if (auxiliar) {
        return "Reprovado";
    } else if (nota < 7) {
        return "Prova Final";
    }
    else {
        return "Aprovado";
    }
}

//Fui Aprovado com Média
//Implemente a função ao lado, que recebe 3 notas e retorna as strings sim ou não, indicando se a média simples entre
// as 3 notas (somar e dividir por 3) é maior ou igual a 7.
function aprovado(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    let passou = (media >= 7);
    if (passou) {
        return "sim";
    } else {
        return "não";
    }
}