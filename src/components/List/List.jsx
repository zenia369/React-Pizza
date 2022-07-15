import React from "react";
import './List.scss';

import Item from "../Item/Item";

const items = [
    {
        img: 'images/item-1.svg',
        title: 'Чісбургер-піцца',
        weight: [
            {
                size: 'тонке',
                price: 30,
                active: true
            },
            {
                size: 'традиційне',
                price: 50,
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
        number: 1,
    },
    {
        img: 'images/item-1.svg',
        title: 'Чісбургер-піцца',
        weight: [
            {
                size: 'тонке',
                price: 30,
                active: true
            },
            {
                size: 'традиційне',
                price: 50,
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
        number: 2,
    },
    {
        img: 'images/item-1.svg',
        title: 'Чісбургер-піцца',
        weight: [
            {
                size: 'тонке',
                price: 30,
                active: true
            },
            {
                size: 'традиційне',
                price: 50,
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
        title: 'Чісбургер-піцца',
        weight: [
            {
                size: 'тонке',
                price: 30,
                active: true
            },
            {
                size: 'традиційне',
                price: 50,
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
        title: 'Чісбургер-піцца',
        weight: [
            {
                size: 'тонке',
                price: 30,
                active: true
            },
            {
                size: 'традиційне',
                price: 50,
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
        title: 'Чісбургер-піцца',
        weight: [
            {
                size: 'тонке',
                price: 30,
                active: true
            },
            {
                size: 'традиційне',
                price: 50,
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
]

const List = () => {

    return (
        <div className="list">
            <h2>Всі піцци</h2>
            <div className="wrapper">
                {
                    items.map((el, i) => {
                        return <Item
                            key={el.title+i}
                            {...el}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default List