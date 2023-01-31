//Soma Dos Maiores
//Implemente a função ao lado que recebe 3 números e retorna a soma dos 2 maiores
//Exemplo:
//Se forem passados num1=2, num2=5 e num3=1, a função deve retornar 7, pois num1 e num2 são os 2 maiores valores que somados dão 7.
//Observação:
//Todos os valores serão distintos entre si, ou seja, não ocorrerá algo como num1=2, num2=2.

function somaDosMaiores(num1,num2,num3){
    if (num1 >= num2 && num1 >= num3) {
        maior1 = num1;
        if (num2 > num3 ){
            maior2 = num2;
        }
        else {
            maior2 = num3;
        }
    }

    if (num2 >= num1 && num2 >= num3) {
        maior1 = num2;
        if (num1 > num3) {
            maior2 = num1;
        }
        else {
            maior2 = num3;
        }
    }

    if (num3 >= num1 && num3 >= num2) {
        maior1 = num3;
        if (num1 > num2) {
            maior2 = num1;
        }
        else {
            maior2 = num2;
        }
    }


    let soma = maior1 + maior2;
    return soma;
}
console.log(somaDosMaiores2(1,2,3));

function somaDosMaiores2(num1, num2, num3) {
    let maior1 = Math.max(num1, num2, num3);
    let numeros = [num1, num2, num3];
    numeros.splice(numeros.indexOf(maior1), 1);
    let maior2 = Math.max(numeros[0], numeros[1]);
    return maior1 + maior2;
}
console.log(somaDosMaiores2(1,2,3));