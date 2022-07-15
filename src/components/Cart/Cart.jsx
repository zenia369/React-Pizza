import React from "react";
import './Cart.scss';

import getPrice from "../../helpers/getPrice";

import ItemCart from "./ItemCart/ItemCart";
import { Link } from "react-router-dom";

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
        number: 3,
    },
]

const Cart = () => {
    const totalPrice = items.reduce((acc, el) => {
        const price = getPrice(el.price, el.number, el.weight, el.radius);
        acc += price;
        return acc
    }, 0);

    return (
        <section className="cart">
            <div className="cart_head">
                <div className="cart_head_cart">
                    <img src="images/icons/big-cart.svg" alt="big cart" />
                    <h2>Корзина</h2>
                </div>
                <button>
                    <img src="images/icons/trash.svg" alt="trash icon" />
                    <p>Очисити<br/>корзину</p>
                </button>
            </div>
            <div className="cart_list">
                {
                    items.map((el, i) => <ItemCart key={el.title + i} {...el}/>)
                }
            </div>
            <div className="cart_footer">
                <div className="cart_footer_info">
                    <p className="number">Всього піцц: <span>{items.length}  шт</span></p>
                    <p className="totalPrice">Вартість замовлення: <span>{totalPrice} грн</span></p>
                </div>
                <div className="cart_footer_btns">
                    <Link to={'/'}>
                        {'<'} Повренутись назад
                    </Link>
                    <button>
                        Оплатити зараз 
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Cart