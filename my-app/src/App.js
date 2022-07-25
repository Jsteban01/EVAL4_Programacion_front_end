import React, {useEffect,useState} from "react"
import {Routes,Route,Link} from "react-router-dom"
import Perfil from "./componentes/Perfil"
import PerfilFragment from "./componentes/PerfilFragment"
import Comentarios from "./componentes/Comentarios";
import Galeria from "./componentes/Galeria";

/*Componente vista: llamado App*/
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Perfil />} />
            <Route path="/comentarios" element={<Comentarios />} />
            <Route path="/perfilFragment" element={<PerfilFragment />} />
            <Route path="/galeria" element={<Galeria />} />
        </Routes>
    )
}

export  default App