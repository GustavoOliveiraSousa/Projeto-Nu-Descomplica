import { useState } from "react"

export const Formulario = () => {
    const [fieldValue, setFieldValue] = useState({
        nome: '',
        cidade: '',
        CPF: '',
        RG: '',
    })
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setFieldValue({
            ...fieldValue,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <form>
                <input type="text" placeholder="nome" name="nome" value={fieldValue.nome} onChange={handleChange} />
                <input type="text" placeholder="cidade" name="cidade" value={fieldValue.cidade} onChange={handleChange} />
                <input type="text" placeholder="CPF" name="CPF" value={fieldValue.CPF} onChange={handleChange} />
                <input type="text" placeholder="RG" name="RG" value={fieldValue.RG} onChange={handleChange} />
            </form>
        </div>

    )
}