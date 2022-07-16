import React from "react";
import './List.scss';

import {useDispatch, useSelector} from 'react-redux';
import { settingsChange } from "../../redux/slices/pizzas";


import Item from "../Item/Item";

import sortList from "../../helpers/sortList";
import CardLoader from "../UI/CardLoader/CardLoader";


const List = () => {
    const dispatch = useDispatch();

    let {items, loading} = useSelector(state => state.pizzas);
    const filterActive = useSelector(state => state.filter.active);
    const sortActive = useSelector(state => state.sort.active);
    
    items = sortList(items, filterActive);
    items = sortList(items, sortActive);

    const HandleSettingsChange = (settingName, size, id) => {
        dispatch(settingsChange({settingName, size, id}))
    }

    return (
        <div className="list">
            <h2>Всі піцци</h2>
            {
                (loading && items.length === 0)
                    ? (
                        <div className="wrapper">
                            {
                                [...Array(5)].map((el, i) => 
                                    <div className="item" key={i+'listLoader'}>
                                        <CardLoader/>
                                    </div>)
                            } 
                        </div>
                    )
                    : (
                        <div className="wrapper">
                            {
                                items.map((el, i) => {
                                    return (
                                        <Item
                                            key={el.title+i}
                                            {...el}
                                            HandleSettingsChange={HandleSettingsChange}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default List