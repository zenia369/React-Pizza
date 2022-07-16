import React from "react";
import { Link } from "react-router-dom";

import './Header.scss';

import { useSelector } from "react-redux";

import getTotalPrice from "../../helpers/getTotalPrice";
import getTotalOrderCounts from "../../helpers/getTotalOrderCounts";

const Header = (props) => {
    const {items:pizzas, cartIdPizzas} = useSelector(state => state.pizzas);

    const items = pizzas.filter(el => cartIdPizzas.includes(el.id));

    const totalPrice = getTotalPrice(items);
    const totalLength = getTotalOrderCounts(items);


    return (
        <header className="header">
            <Link to={'/'} className="logo">
                <img src="images/logo.png" alt="logo" />
                <div className="name">
                    <h1>React Pizza</h1>
                    <p>cмачно споєктована піцца</p>
                </div>
            </Link>

            <Link to={'/cart'} className="cart">
                {totalPrice} грн <span></span> <img src="images/icons/cart.svg" alt="icon cart" /> {totalLength}
            </Link>
        </header>
    )
}

export default Header