import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Copy } from "@phosphor-icons/react";

import { ReportFields } from "../types/ReportFields.ts";
import { Courses, Class, Weekdays, ReportInitial } from "../assets/index.ts";
import ReportStructure from "../utils/ReportStructure.ts";
import CopyToClipboard from "../utils/CopyToClipboard.ts";
import { Select, TextMultiline, TextLine, Modal } from "../components/index.tsx";

const Report = function() {

    const [ modalShow, setModalShow ] = useState<boolean>(false);
    const [ modalMessage, setModalMessage ] = useState<string>("Copiado com sucesso!");
    const [ report, setReport ] = useState<ReportFields>(ReportInitial);

    const ReportButtonAction = function() {
        const structure = ReportStructure(report);
        CopyToClipboard(structure)
            .then(function() {
                setModalShow(true);
                setModalMessage("Copiado com sucesso!");
            })
            .catch(function() {                 
                setModalShow(true);
                setModalMessage("Houve um erro ao copiar!");
            });
    };
    
    const InputChanger = function<T>(event: React.ChangeEvent<T & { value: string }>, name: string) {
        setReport({ ...report, [ name ]: event.target.value });
    };

    return (
        <>
            <Modal message={ modalMessage } show={ modalShow } setShow={ setModalShow }/>
            <div className="text-center"> Gerar relatório </div>
            <Select name="course" value={ report.course } onChange={ (event) => InputChanger(event, "course") }>
                {
                    Object.keys(Courses).map(function(optionGroupLabel) {
                        const keyOptionGroupElement = uuidv4();
                        return (
                            <optgroup key={ keyOptionGroupElement } label={ optionGroupLabel }>
                                {
                                    Courses[optionGroupLabel as keyof typeof Courses].map(function(optionName) {
                                        const keyOptionElement = uuidv4();
                                        return (
                                            <option key={ keyOptionElement }>
                                                { optionName }
                                            </option>
                                        );
                                    })
                                }
                            </optgroup>
                        );
                    })
                }
            </Select>
            <Select name="class" value={ report.class } onChange={ (event) => InputChanger(event, "class") }>
                {
                    Class.map(function(optionName) {
                        const keyOptionElement = uuidv4();
                        return (
                            <option key={ keyOptionElement }>
                                { optionName }
                            </option>
                        )
                    })
                }
            </Select>
            <Select name="weekday" value={ report.weekday } onChange={ (event) => InputChanger(event, "weekday") }>
                {
                    Weekdays.map(function(optionName) {
                        const keyOptionElement = uuidv4();
                        return (
                            <option key={ keyOptionElement }>
                                { optionName }
                            </option>
                        )
                    })
                }
            </Select>
            <TextMultiline
                lines={ 1 }
                name="content"
                value={ report.content }
                placeholder="Material de referência"
                onChange={ (event) => InputChanger(event, "content") }/>
            <TextMultiline
                lines={ 3 }
                name="resume"
                value={ report.resume }
                placeholder="Resumo da aula"
                onChange={ (event) => InputChanger(event, "resume") }/>
            <TextMultiline
                lines={ 3 }
                name="homework"
                value={ report.homework }
                placeholder="Diversão de casa"
                onChange={ (event) => InputChanger(event, "homework") }/>
            <TextLine 
                name="teacher"
                value={ report.teacher }
                placeholder="Instrutor(a)"
                onChange={ (event) => InputChanger(event, "teacher") }/>            
            <button onClick={ ReportButtonAction } className="bg-gray-200 hover:bg-red-400 hover:text-white active:opacity-50 p-4 flex items-center gap-2 justify-center rounded-lg transition-all"> 
                <Copy size={ 20 }/>
                <span> Copiar </span>
            </button>
        </>
    );

};

export default Report;