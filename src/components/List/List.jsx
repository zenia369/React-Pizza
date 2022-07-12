import React from "react";
import './List.scss';

import Item from "../Item/Item";

const items = [
    {
        img: 'images/item-1.svg',
        title: 'Чісбургер-піцца',
        weight: [
            {
                size: 20,
                active: true
            },
            {
                size: 40,
                active: false
            }
        ],
        radius: [
            {
                size: 26,
                price: 100,
                active: true
            },
            {
                size: 30,
                price: 200,
                active: false
            },
            {
                size: 40,
                price: 300,
                active: false
            }
        ],
        price: 70,
        number: 0,
    },
    {
        img: 'images/item-1.svg',
        title: 'Сирна',
        weight: [
            {
                size: 'тонке',
                active: true
            },
            {
                size: 'традиційне',
                active: false
            }
        ],
        radius: [
            {
                size: 26,
                price: 100,
                active: false,
                disabled: true
            },
            {
                size: 30,
                price: 200,
                active: true
            },
            {
                size: 40,
                price: 300,
                active: false,
                disabled: true
            }
        ],
        price: 70,
        number: 1,
    }
]

const List = () => {

    return (
        <div className="list">
            <h2>Всі піцци</h2>
            <div className="wrapper">
                {
                    items.map(el => {
                        return <Item
                            key={el.title}
                            {...el}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default List