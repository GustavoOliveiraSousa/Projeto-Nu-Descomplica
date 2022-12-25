import React from "react";

const UINumber = ({ children }) => {

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <h3>
            {formatter.format(children)}
        </h3>
    )
}

export default UINumber;