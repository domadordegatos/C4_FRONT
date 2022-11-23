import { React } from "react";
import { NavLink } from "react-router-dom";
function Menu(){
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
        </nav>
    )
}

export {Menu}