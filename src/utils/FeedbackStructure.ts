import type { FeedbackFields } from "../types/FeedbackFields.ts";

const FeedbackStructure = function (feedback: FeedbackFields): string {
    return `*${feedback.stage} - ${feedback.student}*\n\n${feedback.resume}\n\nAtenciosamente,\nInstrutor(a) ${feedback.teacher}!`;
};

export default FeedbackStructure;
