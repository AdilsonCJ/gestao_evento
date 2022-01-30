// Sistema de Classificação

let numeroAlunos = 10

// Quando sabemos o número de iterações ~~> For (Laço Contado)

// for (declarar variável contadora ; condição de repetição ; contagem - como ele conta a variável?)
// Tecnicamente qualquer operação pode ser feito no contador
// Exemplos :

for(let contador = 0 ; contador < numeroAlunos ; contador++) {

    if (contador == 0){
        console.log(`O número ${contador} é ZERO`)
    } else if (contador % 2 == 0){
        console.log(`O número ${contador} é PAR`)
    } else if (contador % 2 != 0){
        console.log(`O número ${contador} é IMPAR`)
    }
}
