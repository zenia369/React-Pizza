import React from "react";
import './Filter.scss';

import FilterLoader from "../UI/FilterLoader/FilterLoader";

import {useDispatch, useSelector} from 'react-redux';
import { changeSort, setActiveShow } from "../../redux/slices/sort";
import { changeVariants } from "../../redux/slices/filter";


const Filter = (props) => {

    const dispatch = useDispatch();

    const {items:variants, loading:loadingVariants} = useSelector(state => state.filter);
    const {items:sorts, loading:loadingSorts, activeShow:active} = useSelector(state => state.sort);

    
    const changeActive = () => {
        dispatch(setActiveShow(!active));
    }
    const clickChangeHendle = (data) => {
        dispatch(changeSort(data))
    }
    const changeClickHandle = (data) => {
        dispatch(changeVariants(data))
    }
    
    return (
        <div className="filter">
            <ul className="variants">
                {
                    loadingVariants && variants.length === 0 
                        ? (
                            <FilterLoader length={5}/>
                        )
                        : (
                            variants.map(el => {
                                return (
                                    <li 
                                        key={el.text}
                                        className={el.active ? 'active' : ''}
                                        onClick={() => changeClickHandle(el.data)}
                                    >
                                        {el.text}
                                    </li>
                                )
                            })
                        )
                }
            </ul>
            <div className={active? 'sort active' : 'sort' }>
                {
                    loadingSorts && sorts.length === 0
                        ? (
                            <FilterLoader length={1} width={230} itemWidth={210} x={5}/>
                        )
                        : (
                            <>
                                <button onClick={changeActive}>
                                    <img src="images/icons/filter-status.svg" alt="filter icon" /> ?????????????????? ????: <span>{(sorts.find((el) => el.active)).text}</span>
                                </button>
                                <ul className="sorts">
                                    {
                                        sorts.map(el => {
                                            return (
                                                <li
                                                    key={el.text}
                                                    className={el.active? 'active' : ''}
                                                    onClick={() => clickChangeHendle(el.data)}
                                                >
                                                    ???? {el.text}
                                                </li>
                                            )
                                        })
                                            
                                    }
                                </ul>
                            </>
                        )
                }
                
            </div>
        </div>
    )
}

export default Filter