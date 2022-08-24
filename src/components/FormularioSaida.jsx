import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    background: #eee;
    background-image: url("/superelatorio/background.png");
    flex: 1;
    padding: 32px;
    user-select: all;
`

const ModeloMensagem = styled.div`
    background: white;
    border-radius: 0px 12px 12px 12px;
    box-shadow: 2px 2px 16px rgba(128, 128, 128, 0.4);
    padding: 16px;
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
        <ModeloMensagem>

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

        </ModeloMensagem>
    </Modelo>
}