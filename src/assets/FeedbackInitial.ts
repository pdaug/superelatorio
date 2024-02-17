import LocalStorageGet from "../functions/LocalStorageGet.ts";

const FeedbackInitial = {
    stage: LocalStorageGet("stage") || "Feedback 1",
    student: "",
    resume: "",
    teacher: LocalStorageGet("teacher"),
};

export default FeedbackInitial;
