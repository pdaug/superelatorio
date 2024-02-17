import LocalStorageGet from "../functions/LocalStorageGet.ts";

const ReportInitial = {
    course: "SuperKids Maker",
    class: LocalStorageGet("class") || "Aula 01",
    weekday: LocalStorageGet("weekday") || "Segunda-feira",
    content: "",
    resume: "",
    homework: "",
    teacher: LocalStorageGet("teacher"),
};

export default ReportInitial;
