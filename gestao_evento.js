// Conforme estipulado no Encontro Remoto 02 - Realizar considerado 1 evento
let dataEvento = new Date("02/12/2022")
let listaParticipantes = ["Danilo","Patrick","Ana","Allana"]
const listaIdade = [19, 22, 18, 52]


let dataHoje = new Date()

const found = listaIdade.find(element => element < 18)

if(dataEvento >= dataHoje) {
    console.log("Evento com Data Válida !")
    if(listaParticipantes.length > 100) {
        console.log("Capacidade Máxima de 100 pessoas do Evento Excedida !")
    }
    else {
        console.log(`Capacidade de ${listaParticipantes.length} participantes Permitida`)        
        
        if(found < 18) {
            console.log("Erro no cadastro : Há participantes menores de idade")
        } 
        else {
            console.log("Cadastro do Evento e Participantes Realizado com Sucesso !")
            for (let contador = 0 ; contador < listaParticipantes.length; contador ++){
                console.log(`Participante de Número : ${contador}`)
                console.log(`Participante : ${listaParticipantes[contador]} de Idade : ${listaIdade[contador]} anos`)
            }

        }
    }
} else {
    console.log("Evento Inválido")
}

