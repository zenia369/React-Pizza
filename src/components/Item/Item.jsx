import React from "react";
import './Item.scss';

import getPrice from "../../helpers/getPrice";

import ButtonItem from "../UI/ButtonItem/ButtonItem";
import SettingsItem from "../UI/SettingsItem/SettingsItem";

const Item = (props) => {
    const totalPrice = getPrice(props.price, 1, props.weight, props.radius);

    return (
        <div className="item">
            <img src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
            <div className="settings">
                <SettingsItem item={props.weight} />
                <SettingsItem item={props.radius} />
            </div>
            <div className="controller">
                <p className="price">{totalPrice} грн</p>
                <ButtonItem number={props.number} />
            </div>
        </div>
    )
}

export default Item