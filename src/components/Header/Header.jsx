import React from "react";
import { Link } from "react-router-dom";

import './Header.scss';

const Header = (props) => {
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
                500 грн <span></span> <img src="images/icons/cart.svg" alt="icon cart" /> 3
            </Link>
        </header>
    )
}

export default Header