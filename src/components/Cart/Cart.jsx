import React from "react";
import './Cart.scss';

import ItemCart from "./ItemCart/ItemCart";
import EmptyCart from "./EmptyCart/EmptyCart";

import getTotalOrderCounts from "../../helpers/getTotalOrderCounts";
import getTotalPrice from "../../helpers/getTotalPrice";

import { Link } from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux';
import { deleteAllCartItmes } from "../../redux/slices/pizzas";


const Cart = () => {
    const dispatch = useDispatch();


    const {items:pizzas, cartIdPizzas} = useSelector(state => state.pizzas);

    const items = pizzas.filter(el => cartIdPizzas.includes(el.id));
    
    const totalPrice = getTotalPrice(items);
    const totalLength = getTotalOrderCounts(items);

    const deleteAllCartHandle = () => {
        dispatch(deleteAllCartItmes())
    }

    return (
        <section className="cart">
            {
                (items.length === 0) 
                    ? <EmptyCart />
                    : <>
                        <div className="cart_head">
                            <div className="cart_head_cart">
                                <img src="images/icons/big-cart.svg" alt="big cart" />
                                <h2>Корзина</h2>
                            </div>
                            <button onClick={deleteAllCartHandle}>
                                <img src="images/icons/trash.svg" alt="trash icon" />
                                <p>Очисити корзину</p>
                            </button>
                        </div>
                        <div className="cart_list">
                            {
                                items.map((el, i) => <ItemCart key={el.title + i} {...el}/>)
                            }
                        </div>
                        <div className="cart_footer">
                            <div className="cart_footer_info">
                                <p className="number">Всього піцц: <span>{totalLength}  шт</span></p>
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
                    </>
            }
        </section>
    )
}

export default Cart