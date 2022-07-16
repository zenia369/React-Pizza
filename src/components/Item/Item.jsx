import React from "react";
import './Item.scss';

import getPrice from "../../helpers/getPrice";

import ButtonItem from "../UI/ButtonItem/ButtonItem";
import SettingsItem from "../UI/SettingsItem/SettingsItem";

import {useDispatch} from 'react-redux';
import { addPizzaCount } from "../../redux/slices/pizzas";

const Item = ({HandleSettingsChange, ...props}) => {
    const dispatch = useDispatch();
    const totalPrice = getPrice(props.price, 1, props.weight, props.radius);

    const addClickHandle = () => {
        dispatch(addPizzaCount(props.id))
    }

    return (
        <div className="item">
            <img src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
            <div className="settings">
                <SettingsItem id={props.id} name={'weight'} click={HandleSettingsChange} item={props.weight} />
                <SettingsItem id={props.id} name={'radius'} click={HandleSettingsChange} item={props.radius} />
            </div>
            <div className="controller">
                <p className="price">{totalPrice} грн</p>
                <ButtonItem click={addClickHandle} number={props.number} />
            </div>
        </div>
    )
}

export default Item