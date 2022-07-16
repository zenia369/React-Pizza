import React from "react";
import './List.scss';

import {useDispatch, useSelector} from 'react-redux';
import { settingsChange } from "../../redux/slices/pizzas";


import Item from "../Item/Item";
import Loader from '../UI/Loader/Loader';


const List = () => {
    const dispatch = useDispatch();

    const {items, loading} = useSelector(state => state.pizzas);

    const HandleSettingsChange = (settingName, size, id) => {
        dispatch(settingsChange({settingName, size, id}))
    }

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