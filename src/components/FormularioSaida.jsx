import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 16px;
    user-select: all;
`

const ModeloLinha = styled.div`
    overflow-wrap: break-word;
    text-align: left;
    word-break: break-all;
`

const ModeloTitulo = styled.div`
    font-weight: 600;
    overflow-wrap: break-word;
    text-align: left;
    word-break: break-all;
`

export default function FormularioSaida(props) {

    return <Modelo>
        
        <ModeloTitulo> *{props.fase} - { props.aula } - { props.semana}* </ModeloTitulo>
        
        <ModeloLinha><br/></ModeloLinha>

        <ModeloTitulo> *Material de Referência* </ModeloTitulo>
        <ModeloLinha><br/></ModeloLinha>
        <ModeloLinha> { props.material } </ModeloLinha>
        
        <ModeloLinha><br/></ModeloLinha>

        <ModeloTitulo>*Resumo da aula*</ModeloTitulo>
        <ModeloLinha><br/></ModeloLinha>
        <ModeloLinha> { props.resumo } </ModeloLinha>

        <ModeloLinha><br/></ModeloLinha>

        <ModeloTitulo>*Diversão de casa*</ModeloTitulo>
        <ModeloLinha><br/></ModeloLinha>
        <ModeloLinha> { props.diversao } </ModeloLinha>
        
        <ModeloLinha><br/></ModeloLinha>

        <ModeloTitulo>*Portal SuperGeeks*</ModeloTitulo>
        <ModeloLinha><br/></ModeloLinha>
        <ModeloLinha> 👉 https://portal.supergeeks.school/ </ModeloLinha>

        <ModeloLinha><br/></ModeloLinha>

        <ModeloLinha>Atenciosamente,</ModeloLinha>
        <ModeloLinha>Instrutor { props.instrutor }.</ModeloLinha>

    </Modelo>
}