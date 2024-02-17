import type { ReportFields } from "../types/ReportFields.ts";
import type { CourseReportCategory } from "../types/CourseReportCategory.ts";

const ReportStructure = function (report: ReportFields, reportCategory: CourseReportCategory): string {
    const reportWebsiteUrl = reportCategory === "SuperGeeks" ? "https://portal.supergeeks.school/" : "https://codebuddy.supergeeks.school/";
    return `*${report.course} - ${report.class} - ${report.weekday}*\n\n*Material de Referência*\n\n${report.content}\n\n*Resumo da Aula*\n\n${report.resume}\n\n*Diversão de Casa*\n\n${report.homework}\n\n*Portal ${reportCategory}*\n\n👉 ${reportWebsiteUrl}\n\nAtenciosamente\nInstrutor(a) ${report.teacher}!`;
};

export default ReportStructure;
