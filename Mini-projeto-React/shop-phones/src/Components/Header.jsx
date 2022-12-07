import React from "react";
import { Link } from "react-router-dom";


export const HeaderStore = () => {
    return (
        <div>
            <Link to={'/'}>Loja</Link>
            <Link to={'/cart'}>Carrinho</Link>
        </div>
    )
}

export const Headercart = () => {
    return (
        <div>
            <Link to={'/'}>Loja</Link>
        </div>
    )
}