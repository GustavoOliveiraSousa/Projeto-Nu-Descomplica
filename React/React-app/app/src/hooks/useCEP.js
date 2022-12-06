import { useState, useEffect } from "react"
import { useSettingsContents } from "../App";

export const useCEP = (cep) => {
    const [endereco, setEndereco] = useState({});
    const value = useSettingsContents()
    const fetchCEP = (cep) => {
        fetch(`${value.cepUrlBase} / ws / ${cep} / json / `)
            .then(dados => dados.json())
            .then(endereco => {
                console.log(endereco);
                setEndereco(endereco);
            })
    }

    useEffect(() => {
        fetchCEP(cep)
    }, [cep])

    return endereco;
}