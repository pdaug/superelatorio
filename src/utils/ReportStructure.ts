import { ReportFields } from "../types/ReportFields";

const ReportStructure = function(report: ReportFields): string {

    return `*${ report.course } - ${ report.class } - ${ report.weekday }*\n\n*Material de Referência*\n\n${ report.content }\n\n*Resumo da Aula*\n\n${ report.resume }\n\n*Diversão de Casa*\n\n${ report.homework }\n\n*Portal SuperGeeks*\n\n👉 https://portal.supergeeks.school/\n\nAtenciosamente\nInstrutor(a) ${ report.teacher }!`;

};

export default ReportStructure;