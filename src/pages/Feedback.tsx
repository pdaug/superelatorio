import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Copy } from "@phosphor-icons/react";

import CopyToClipboard from "../utils/CopyToClipboard.ts";
import { FeedbackFields } from "../types/FeedbackFields.ts";
import { Stages, FeedbackInitial } from "../assets/index.ts";
import LocalStorageSet from "../functions/LocalStorageSet.ts";
import FeedbackStructure from "../utils/FeedbackStructure.ts";
import { Select, TextMultiline, TextLine, Modal } from "../components/index.tsx";

const Feedback = function () {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [feedback, setFeedback] = useState<FeedbackFields>(FeedbackInitial);
    const [modalMessage, setModalMessage] = useState<string>("Copiado com sucesso!");
    const GoBackMenu = function () {
        navigate("/");
    };
    const FeedbackButtonAction = function () {
        const structure = FeedbackStructure(feedback);
        const resultTeacher = LocalStorageSet("teacher", feedback.teacher);
        const resultStage = LocalStorageSet("stage", feedback.stage);
        if (!resultTeacher || !resultStage) {
            setModalShow(true);
            setModalMessage("Houve um erro ao salvar os dados na memória!");
            return;
        }
        CopyToClipboard(structure)
            .then(function () {
                setModalShow(true);
                setModalMessage("Copiado com sucesso!");
            })
            .catch(function () {
                setModalShow(true);
                setModalMessage("Houve um erro ao copiar!");
            });
    };
    const InputChanger = function <T>(event: React.ChangeEvent<T & { value: string }>, name: string) {
        setFeedback({ ...feedback, [name]: event.target.value });
    };
    return (
        <>
            <Modal message={modalMessage} show={modalShow} setShow={setModalShow} />
            <div className="text-center"> Gerar feedback </div>
            <Select name="stage" value={feedback.stage} onChange={(event) => InputChanger(event, "stage")}>
                {Stages.map(function (optionName) {
                    const keyOptionElement = uuidv4();
                    return <option key={keyOptionElement}>{optionName}</option>;
                })}
            </Select>
            <TextLine name="student" value={feedback.student} placeholder="Aluno(a)" onChange={(event) => InputChanger(event, "student")} />
            <TextMultiline lines={3} name="resume" value={feedback.resume} placeholder="Conteúdo do feedback..." onChange={(event) => InputChanger(event, "resume")} />
            <TextLine name="teacher" value={feedback.teacher} placeholder="Instrutor(a)" onChange={(event) => InputChanger(event, "teacher")} />
            <div className="flex gap-6">
                <button onClick={GoBackMenu} className="bg-gray-200 hover:bg-red-400 hover:text-white active:opacity-50 px-6 p-4 flex items-center gap-2 justify-center rounded-lg transition-all">
                    Voltar
                </button>
                <button onClick={FeedbackButtonAction} className="bg-gray-200 hover:bg-red-400 hover:text-white active:opacity-50 p-4 flex items-center gap-2 justify-center rounded-lg transition-all flex-1">
                    <Copy size={20} />
                    <span> Copiar </span>
                </button>
            </div>
        </>
    );
};

export default Feedback;
