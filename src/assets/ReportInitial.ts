import LocalStorageGet from "../functions/LocalStorageGet";

const ReportInitial = {
    course: "",
    class: LocalStorageGet("class"),
    weekday: LocalStorageGet("weekday"),
    content: "",
    resume: "",
    homework: "",
    teacher: LocalStorageGet("teacher"),
};

export default ReportInitial;
