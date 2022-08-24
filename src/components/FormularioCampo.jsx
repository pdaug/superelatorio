import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    justify-content: center;
    padding: 16px;
    user-select: none;
`

export default function FormularioCampo(props) {

    return <Modelo>
        { props.children }
    </Modelo>
}