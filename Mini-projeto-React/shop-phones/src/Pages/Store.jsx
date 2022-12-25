import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs'
import { getItem, setItem } from "../services/LocalStoregeFuncs";
import { HeaderStore } from "../Components/Header";

import UINumber from "../UNNumber";
import '../styles/Style.css'

export const Store = () => {

    const [data, setData] = useState([])
    const [cart, setCart] = useState(getItem('carrinhoNu') || [])

    useEffect(() => {
        const fetchAPI = async () => {
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular'
            const response = await fetch(url);
            const objJson = await response.json()
            setData(objJson.results)
        }
        fetchAPI()
    }, [])

    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        if (element) {
            const arrFilter = cart.filter((e) => e.id !== obj.id)
            setCart(arrFilter)
            setItem('carrinhoNu', arrFilter)
        } else {
            setCart([...cart, obj])
            setItem('carrinhoNu', [...cart, obj])
        }
    }

    return (
        <div>
            <HeaderStore />
            <h1>Store</h1>
            <div className="S-Produto">
                {
                    data.map((e) => (
                        <div className="S-ProdutoBody" key={e.id}>
                            <h4 className="S-Titulo">{e.title}</h4>
                            <img className="S-Imagem" alt="" src={e.thumbnail} />
                            <UINumber className="S-Preco">{e.price}</UINumber>
                            <button className="S-Botao"
                                onClick={() => handleClick(e)}>
                                {
                                    cart.some((itemCart) => itemCart.id === e.id) ? (<BsFillCartCheckFill className="S-BotaoInternoOK" />) : (<BsFillCartPlusFill className="S-BotaoInternoADD" />)
                                }
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

