import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    border-radius: 5px;
    background: #fff;
    box-shadow: 4px 4px 12px rgba(100, 100, 100, 0.5);
    display: flex;
    overflow: hidden;
    width: 760px;

    @media only screen and (max-width: 800px) {
        border-radius: 0;
        box-shadow: none;
        flex-direction: column;
        width: 100vw;
    }
`

export default function Formulario(props) {

    return <Modelo>
        { props.children }
    </Modelo>
}