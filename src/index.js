import React from "react"
import { createRoot } from "react-dom/client"

import Rotas from "./Rotas"

const contetor = document.getElementById("superelatorio")
const origem = createRoot(contetor)

origem.render(<Rotas/>)