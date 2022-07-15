import React from "react";
import getPrice from "../../../helpers/getPrice";
import './ItemCart.scss';

const ItemCart = (props) => {
    const weightInfo = (props.weight.find(el => el.active)).size;
    const radiusInfo = (props.radius.find(el => el.active)).size;
    const totalPrice = getPrice(props.price, props.number, props.weight, props.radius);

    return (
        <div className="cart-item">
            <div className="cart-item_info">
                <img src={props.img} alt={props.title} />
                <div className="cart-item_info-text">
                    <h3>{props.title}</h3>
                    <p>{weightInfo} тісто, {radiusInfo} см</p>
                </div>
            </div>
            <div className="cart-item_numbers">
                <button>-</button>
                <p>{props.number}</p>
                <button>+</button>
            </div>
            <p className="cart-item_price">{totalPrice} грн</p>
            <button className="cart-item_delete">Х</button>
        </div>
    )
}

export default ItemCart