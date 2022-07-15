import React, {useEffect} from "react";
import './List.scss';

import {useDispatch, useSelector} from 'react-redux';
import { fetchPizzas } from "../../redux/slices/pizzas";

import Item from "../Item/Item";
import Loader from '../UI/Loader/Loader';

const itemsOld = [
    {
        img: 'images/item-1.svg',
        id: '1',
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
        rating: 2,
    },
    {
        id: '2',
        img: 'images/item-2.svg',
        title: 'Сирна',
        weight: [
            {
                size: 'тонке',
                price: 35,
                active: true
            },
            {
                size: 'традиційне',
                price: 55,
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
                active: false,
                disabled: true,
            },
            {
                size: 40,
                price: 300,
                active: false,
                disabled: true,
            }
        ],
        price: 75,
        number: 0,
        rating: 3,
    },
    {
        id: '3',
        img: 'images/item-3.svg',
        title: 'Креветки по-східному',
        weight: [
            {
                size: 'тонке',
                price: 30,
                active: true
            },
            {
                size: 'традиційне',
                price: 50,
                active: false,
                disabled: true,
            }
        ],
        radius: [
            {
                size: 26,
                price: 100,
                active: true,
                disabled: true,
            },
            {
                size: 30,
                price: 200,
                active: false
            },
            {
                size: 40,
                price: 300,
                active: false,
                disabled: true,
            }
        ],
        price: 80,
        number: 0,
        rating: 5,
    },
    {
        id: '4',
        img: 'images/item-4.svg',
        title: 'Курока з сиром',
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
        price: 75,
        number: 0,
        rating: 3,
    },
    {
        id: '5',
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
        rating: 1,
    },
    {
        id: '6',
        img: 'images/item-2.svg',
        title: 'Сирна',
        weight: [
            {
                size: 'тонке',
                price: 35,
                active: true
            },
            {
                size: 'традиційне',
                price: 55,
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
                active: false,
                disabled: true,
            },
            {
                size: 40,
                price: 300,
                active: false,
                disabled: true,
            }
        ],
        price: 75,
        number: 0,
        rating: 6,
    },
    {
        id: '7',
        img: 'images/item-3.svg',
        title: 'Креветки по-східному',
        weight: [
            {
                size: 'тонке',
                price: 30,
                active: true
            },
            {
                size: 'традиційне',
                price: 50,
                active: false,
                disabled: true,
            }
        ],
        radius: [
            {
                size: 26,
                price: 100,
                active: true,
                disabled: true,
            },
            {
                size: 30,
                price: 200,
                active: false
            },
            {
                size: 40,
                price: 300,
                active: false,
                disabled: true,
            }
        ],
        price: 80,
        number: 0,
        rating: 5,
    },
    {
        id: '8',
        img: 'images/item-4.svg',
        title: 'Курока з сиром',
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
        price: 75,
        number: 0,
        rating: 4,
    },
];


const List = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas());
    }, [])

    const {items, loading} = useSelector(state => state.pizzas);


    return (
        <div className="list">
            <h2>Всі піцци</h2>
            {
                (loading && items.length === 0)
                    ? <Loader/>
                    : (
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
                    )
            }
        </div>
    )
}

export default List