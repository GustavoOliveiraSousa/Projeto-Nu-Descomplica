import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStoregeFuncs";
import { BsFillCartDashFill } from 'react-icons/bs'
import '../Cart.css'
import { Headercart } from "../Components/Header";

export const Cart = () => {
    const [data, setData] = useState(getItem('carrinhoNu') || [])

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id != obj.id)
        setData(arrFilter)
        setItem('carrinhoNu', arrFilter)
    }

    return (
        <div>
            <h1>cart</h1>
            <Headercart />
            <div className="ProductArea">
                {
                    data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.title}</h4>
                            <h4>{e.price}</h4>
                            <img src={e.thumbnail} />
                            <h4>{e.title}</h4>
                            <button onClick={() => removeItem(e)}>
                                <BsFillCartDashFill />
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}