import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStoregeFuncs";
import { BsFillCartDashFill } from 'react-icons/bs'
import '../styles/Style.css'
import { Headercart } from "../Components/Header";

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
            <h1 className="NomeCarrinho">Carrinho</h1>
            <h3 className="Subtotal" id="subtotal">{`Total R$ ${subTotal}`}</h3>
            <div className="Produtos">
                {
                    data.map((e) => (
                        <div className="ProdutosBody" key={e.id}>
                            <h4 className="Titulo">{e.title}</h4>
                            <h4 className="Preco">{`R$ ${e.price}`}</h4>
                            <img className="Imagem" alt="." src={e.thumbnail} />
                            <button className="Botao" onClick={() => removeItem(e)}>
                                <BsFillCartDashFill className="BotaoInterno" />
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}