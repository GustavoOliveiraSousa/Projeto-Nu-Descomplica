import React, { useState, useEffect } from "react"
import { useThemeContext } from "./App"

const Assento = (props) => {
    const [disabled, setDisabled] = useState(false)

    const handleClick = () => {
        setDisabled(true)
    }

    useEffect(() => {
        console.log('Nasceu');
    }, [])

    useEffect(() => {
        if (disabled) {
            console.log('Alterou para: ', disabled);
        }
    }, [disabled])

    const value = useThemeContext()

    return (

        < button
            className="assento"
            type="button"
            disabled={disabled}
            onClick={() => handleClick()
            }>
            {disabled ? 'X' : <span style={{ color: value.color, fontFamily: value.font }}>{props.pos}</span>}
        </button >
    )
}

const Fileira = (props) => {
    return (
        <div className="Fileira">
            {[0, 1, 2, 3].map((pos, index) => (
                <Assento key={index} pos={props.de + pos} />
            ))}
        </div>
    )
}

export const AssentosOnibus = () => {
    return (
        <div className="container">
            {[1, 5, 9, 13, 17].map((pos, index) => (
                <Fileira key={index} de={pos} />
            ))}
        </div>
    )
}