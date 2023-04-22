const { jsPDF } = window.jspdf
document.querySelector("input[name=instrutorrelatorio]").value = localStorage.getItem("instrutor")
document.querySelector("input[name=instrutorfeedback]").value = localStorage.getItem("instrutor")
function CopiarRelatorio() {
    navigator.clipboard.writeText(`*${ document.querySelector("select[name=fase]").value } - ${ document.querySelector("select[name=aula]").value } - ${ document.querySelector("select[name=semana]").value }*\n\n*Material de Referência*\n\n${ document.querySelector("textarea[name=material]").value }\n\n*Resumo da Aula*\n\n${ document.querySelector("textarea[name=resumo]").value }\n\n*Diversão de Casa*\n\n${ document.querySelector("textarea[name=tarefa]").value }\n\n*Portal SuperGeeks*\n\n👉 https://portal.supergeeks.school/\n\nAtenciosamente\nInstrutor(a) ${ document.querySelector("input[name=instrutorrelatorio]").value }!`)
    .then(function() {
        alert("Relatório copiado com sucesso!")
        localStorage.setItem("instrutor", document.querySelector("input[name=instrutorrelatorio]").value)
    })
    .catch(erro => console.log(erro))
}
function CopiarFeedback() {
    const textoFeedback = parseInt(document.querySelector("select[name=feedback]").value)
    let aulasReferente = `${(textoFeedback * 4) - 3 } a ${textoFeedback * 4}`
    navigator.clipboard.writeText(`Olá! Aqui é o instrutor(a) ${ document.querySelector("input[name=instrutorfeedback]").value } e esse é o ${ textoFeedback } do semestre (referente às aulas ${ aulasReferente }), nessa mensagem quero falar um pouco sobre o aluno e seu desempenho nas seguintes aulas.\n\n*Aluno(a): ${ document.querySelector("input[name=aluno]").value }*\n\n${ document.querySelector("textarea[name=conteudo]").value }\n\nAtenciosamente\nInstrutor(a) ${ document.querySelector("input[name=instrutorfeedback]").value }!`)
    .then(() => {
        alert("Feedback copiado com sucesso!")
        localStorage.setItem("instrutor", document.querySelector("input[name=instrutorfeedback]").value)
    })
    .catch(erro => console.log(erro))
}
function AbrirFeedback() {
    document.querySelector("div.menu").setAttribute("style", "display: none;")
    document.querySelector("div#relatorio").setAttribute("style", "display: none;")
    document.querySelector("div#feedback").setAttribute("style", "display: flex;")
}
function AbrirRelatorio() {
    document.querySelector("div.menu").setAttribute("style", "display: none;")
    document.querySelector("div#relatorio").setAttribute("style", "display: flex;")
    document.querySelector("div#feedback").setAttribute("style", "display: none;")
}
function Voltar() {
    document.querySelector("div.menu").setAttribute("style", "display: flex;")
    document.querySelector("div#relatorio").setAttribute("style", "display: none;")
    document.querySelector("div#feedback").setAttribute("style", "display: none;")
}
function SalvarFeedback() {
    const doc = new jsPDF({ orientation: "l", unit: "px", format: [ 640, 640 ] })
    doc.setFont("helvetica", "bold")
    doc.setFontSize(32)
    doc.text(document.querySelector("input[name=aluno]").value, 80, 80)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(24)
    doc.text("Instrutor(a) " + document.querySelector("input[name=instrutorfeedback]").value, 80, 128)
    doc.setFontSize(22)
    doc.text(doc.splitTextToSize(document.querySelector("textarea[name=conteudo]").value, 480), 80, 176)
    doc.save(`${ document.querySelector("input[name=aluno]").value }.pdf`)
}
function SalvarRelatorio() {
    const doc = new jsPDF({ orientation: "l", unit: "px", format: [ 640, 640 ] })
    doc.setFont("helvetica", "bold")
    doc.setFontSize(22)
    doc.text(`${ document.querySelector("select[name=fase]").value } - ${ document.querySelector("select[name=aula]").value } - ${ document.querySelector("select[name=semana]").value }`, 80, 80)
    doc.setFont("helvetica", "normal")
    doc.text(`Instrutor(a) ${ document.querySelector("input[name=instrutorrelatorio]").value }`, 80, 128)
    doc.text( doc.splitTextToSize( document.querySelector("textarea[name=material]").value, 480 ), 80, 176)
    doc.text( doc.splitTextToSize( document.querySelector("textarea[name=resumo]").value, 480 ), 80, 272)
    doc.text( doc.splitTextToSize( document.querySelector("textarea[name=tarefa]").value, 480 ), 80, 368)
    doc.save(`${ document.querySelector("select[name=fase]").value } ${ document.querySelector("select[name=aula]").value }.pdf`)
}