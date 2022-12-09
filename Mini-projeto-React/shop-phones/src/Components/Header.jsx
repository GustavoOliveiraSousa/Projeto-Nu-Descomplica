import React from "react";
import { Link } from "react-router-dom";
import "../styles/Style.css"

export const HeaderStore = () => {
    return (
        <div className="Header">
            <Link to={'/'} className="Loja">Loja</Link>
            <Link to={'/cart'} className="Carrinho">Carrinho</Link>
        </div>
    )
}

export const Headercart = () => {
    return (
        <div className="Header">
            < Link to={'/'} className="Loja" >Loja</Link >
        </div >
    )
}