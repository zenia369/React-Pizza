import React from "react";
import './EmptyCart.scss';

import { Link } from "react-router-dom";


const EmptyCart = () => {
    return (
        <div className="cart_empty">
            <h2>Корзина пуста</h2>
            <p>Швиде всього Ви ще не обрали піццу. <br/>Поверніться на головну сторінку та оберіть.{')'} </p>
            <img src="images/icons/cart-empty.svg" alt="cart empty" />
            <Link to={'/'}>Повернутись назад</Link>
        </div>
    )
}

export default EmptyCart