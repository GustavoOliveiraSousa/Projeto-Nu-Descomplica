import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStoregeFuncs";
import { BsFillCartDashFill } from 'react-icons/bs'
import '../styles/Style.css'
import { Headercart } from "../Components/Header";
import UINumber from "../UNNumber";

export const Cart = () => {
    const [data, setData] = useState(getItem('carrinhoNu') || [])

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carrinhoNu', arrFilter)
    }

    const subTotal = data.reduce((acc, cur) => acc + cur.price, 0)

    return (
        <div className="Body">
            <Headercart />
            <h1 className="C-NomeCarrinho">Carrinho</h1>
            <UINumber className="C-Subtotal" id="subtotal">{subTotal}</UINumber>

            <div className="C-Produto">
                {
                    data.map((e) => (
                        <div className="C-ProdutoBody" key={e.id}>
                            <h4 className="C-Titulo">{e.title}</h4>
                            <UINumber className="C-Preco">{e.price}</UINumber>
                            <img className="C-Imagem" alt="." src={e.thumbnail} />
                            <button className="C-Botao" onClick={() => removeItem(e)}>
                                <BsFillCartDashFill className="C-BotaoInterno" />
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}