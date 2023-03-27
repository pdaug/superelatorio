const entradaFase = document.querySelector("select[name=fase]")
const entradaAula = document.querySelector("select[name=aula]")
const entradaSemana = document.querySelector("select[name=semana]")
const entradaMaterial = document.querySelector("textarea[name=material]")
const entradaResumo = document.querySelector("textarea[name=resumo]")
const entradaTarefa = document.querySelector("textarea[name=tarefa]")
const entradaInstrutorRelatorio = document.querySelector("input[name=instrutorrelatorio]")

entradaInstrutorRelatorio.value = localStorage.getItem("instrutor")

function CopiarRelatorio() {

    const textoFase  = entradaFase.value
    const textoAula  = entradaAula.value
    const textoSemana  = entradaSemana.value
    const textoMaterial  = entradaMaterial.value
    const textoResumo  = entradaResumo.value
    const textoTarefa  = entradaTarefa.value
    const textoInstrutor  = entradaInstrutorRelatorio.value

    const mensagem = `*${ textoFase } - ${ textoAula } - ${ textoSemana }*\n\n*Material de Referência*\n\n${ textoMaterial }\n\n*Resumo da Aula*\n\n${ textoResumo }\n\n*Diversão de Casa*\n\n${ textoTarefa }\n\n*Portal SuperGeeks*\n\n👉 https://portal.supergeeks.school/\n\nAtenciosamente\nInstrutor(a) ${ textoInstrutor }!`

    navigator.clipboard.writeText(mensagem)

        .then(function() {
        
            alert("Relatório copiado com sucesso!")

            localStorage.setItem("instrutor", textoInstrutor)
        
        })
    
        .catch(function(erro) {
        
            alert("Falha ao copiar o Relatório!")
        
            console.log(erro)
        
        })

}

const entradaFeedback = document.querySelector("select[name=feedback]")
const entradaAluno = document.querySelector("input[name=aluno]")
const entradaConteudo = document.querySelector("textarea[name=conteudo]")
const entradaInstrutorFeedback = document.querySelector("input[name=instrutorfeedback]")

entradaInstrutorFeedback.value = localStorage.getItem("instrutor")

function CopiarFeedback() {

    const textoFeedback = entradaFeedback.value
    const textoAluno = entradaAluno.value
    const textoConteudo = entradaConteudo.value
    const textoInstrutor = entradaInstrutorFeedback.value

    var aulasReferente

    if (textoFeedback[0] == "1")
        aulasReferente = "1 a 4"

    else if (textoFeedback[0] == "2")
        aulasReferente = "5 a 8"

    else if (textoFeedback[0] == "3")
        aulasReferente = "9 a 12"

    else if (textoFeedback[0] == "4")
        aulasReferente = "13 a 16"

    const mensagem = `Olá! Aqui é o instrutor(a) ${ textoInstrutor } e esse é o ${ textoFeedback } do semestre (referente às aulas ${ aulasReferente }), nessa mensagem quero falar um pouco sobre o aluno e seu desempenho nas seguintes aulas.\n\n*Aluno(a): ${ textoAluno }*\n\n${ textoConteudo }\n\nAtenciosamente\nInstrutor(a) ${ textoInstrutor }!`

    navigator.clipboard.writeText(mensagem)

        .then(function() {
    
            alert("Feedback copiado com sucesso!")

            localStorage.setItem("instrutor", textoInstrutor)
        
        })
    
        .catch(function(erro) {
        
            alert("Falha ao copiar o Feedback!")
        
            console.log(erro)
        
        })
        
}

const menu = document.querySelector("div.menu")
const janelaRelatorio = document.querySelector("div#relatorio")
const janelaFeedback = document.querySelector("div#feedback")

function AbrirFeedback() {
    menu.setAttribute("style", "display: none;")
    janelaRelatorio.setAttribute("style", "display: none;")
    janelaFeedback.setAttribute("style", "display: flex;")
}

function AbrirRelatorio() {
    menu.setAttribute("style", "display: none;")
    janelaRelatorio.setAttribute("style", "display: flex;")
    janelaFeedback.setAttribute("style", "display: none;")
}
