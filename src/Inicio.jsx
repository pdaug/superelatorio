import React, { useState } from "react"

import Formulario from "./components/Formulario"
import FormularioCampo from "./components/FormularioCampo"
import FormularioSaida from "./components/FormularioSaida"
import Selecao from "./components/Selecao"
import Texto from "./components/Texto"
import Entrada from "./components/Entrada"

import Grade from "./datas/Grade"
import Aulas from "./datas/Aulas"
import Semana from "./datas/Semana"
import EstadoInicial from "./datas/EstadoInicial"

export default function Inicio() {

    const [ dados, definirDados ] = useState(EstadoInicial)

    return <Formulario>
        <FormularioCampo>
            
            <Selecao 
                value={ dados.fase } 
                onChange={ e => definirDados({ ...dados, ["fase"]: e.target.value }) }>
                { /*Object.keys(Grade).map(function(trilha) {
                    return <optgroup key={trilha} label={trilha}>
                        { Grade[trilha].map(function(curso) {
                            return <option key={curso} value={curso}>{curso}</option>
                        }) }
                    </optgroup>
                })*/ } 
                { Grade.map(function(curso) {
                    return <option key={curso} value={curso}>{curso}</option>
                }) }  
            </Selecao>

            <Selecao
                value={ dados.aula } 
                onChange={ e => definirDados({ ...dados, ["aula"]: e.target.value }) }>
                { Aulas.map(function(aula) {
                    return <option key={aula} value={aula}>{aula}</option>
                }) }
            </Selecao>

            <Selecao
                value={ dados.semana } 
                onChange={ e => definirDados({ ...dados, ["semana"]: e.target.value }) }>
                { Semana.map(function(dia) {
                    return <option key={dia} value={dia}>{dia}</option>
                }) }
            </Selecao>

            <Texto 
                placeholder="Material de referência"
                value={ dados.material }
                onChange={ e => definirDados({ ...dados, ["material"]: e.target.value }) }>
            </Texto>

            <Texto 
                placeholder="Resumo da aula"
                value={ dados.resumo }
                onChange={ e => definirDados({ ...dados, ["resumo"]: e.target.value }) }>
            </Texto>

            <Texto 
                placeholder="Diversão de casa"
                value={ dados.diversao }
                onChange={ e => definirDados({ ...dados, ["diversao"]: e.target.value }) }>
            </Texto>

            <Entrada 
                type="text" 
                placeholder="Instrutor" 
                value={ dados.instrutor }
                onChange={ e => definirDados({ ...dados, ["instrutor"]: e.target.value }) }/>

        </FormularioCampo>

        <FormularioSaida 
            fase={ dados.fase }
            aula={ dados.aula }
            semana={ dados.semana }
            material={ dados.material }
            resumo={ dados.resumo } 
            diversao={ dados.diversao }
            instrutor={ dados.instrutor }/>

    </Formulario>
}