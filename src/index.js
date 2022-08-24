import React from "react"
import { createRoot } from "react-dom/client"

import Inicio from "./Inicio"

const contetor = document.getElementById("superelatorio")
const origem = createRoot(contetor)

origem.render(<Inicio/>)