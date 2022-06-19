import React from "react";

import './Header.scss';

const Header = (props) => {
    return (
        <header className="header">
            <div className="logo">
                <img src="images/logo.png" alt="logo" />
                <div className="name">
                    <h1>React Pizza</h1>
                    <p>cмачно споєктована піцца</p>
                </div>
            </div>
            <button className="cart">
                500 грн <span></span> <img src="images/icons/cart.svg" alt="icon cart" /> 3
            </button>
        </header>
    )
}

export default Header