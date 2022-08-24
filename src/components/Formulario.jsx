import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    border: 1px solid #ced4da;
    border-radius: 3px;
    display: flex;
    width: 760px;

    @media only screen and (max-width: 800px) {
        border: none;
        border-radius: 0;
        width: 100vw;
        flex-direction: column;
        min-height: 100vh;
    }
`

export default function Formulario(props) {

    return <Modelo>
        { props.children }
    </Modelo>
}