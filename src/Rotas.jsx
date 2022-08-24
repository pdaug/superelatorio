import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Inicio from "./pages/Inicio"

export default function Rotas() {
    
    return <BrowserRouter>
        <Routes>

            <Route index path="/" element={ <Inicio/> }/>

        </Routes>
    </BrowserRouter>
}
