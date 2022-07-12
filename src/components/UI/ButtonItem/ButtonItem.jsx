import React from "react";
import './ButtonItem.scss';

const Button_Item = ({number, click}) => {
    return (
        <button
            className={'button'}
            onClick={click}
        >
            <span className="plus">+</span>
            Додати
            { !(number > 0) || <span className="number">{number}</span> }
        </button>
    )
}

export default Button_Item