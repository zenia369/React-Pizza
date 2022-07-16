import React from "react";
import getPrice from "../../../helpers/getPrice";
import './ItemCart.scss';

import {useDispatch} from 'react-redux';
import { addPizzaCount, removePizzaCount, deleteCartItem } from '../../../redux/slices/pizzas';

const ItemCart = (props) => {
    const dispatch = useDispatch();

    const weightInfo = (props.weight.find(el => el.active)).size;
    const radiusInfo = (props.radius.find(el => el.active)).size;
    const totalPrice = getPrice(props.price, props.number, props.weight, props.radius);

    const addClickHandle = () => {
        dispatch(addPizzaCount(props.id))
    }
    const removeClickHandle = () => {
        dispatch(removePizzaCount(props.id))
    }
    const deleteClickHandle = () => {
        dispatch(deleteCartItem(props.id))
    }

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
                <button onClick={removeClickHandle}>-</button>
                <p>{props.number}</p>
                <button onClick={addClickHandle}>+</button>
            </div>
            <p className="cart-item_price">{totalPrice} грн</p>
            <button onClick={deleteClickHandle} className="cart-item_delete">Х</button>
        </div>
    )
}

export default ItemCart