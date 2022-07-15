import React, {useEffect} from "react";
import './Filter.scss';

import {useDispatch, useSelector} from 'react-redux';
import { fetchFilter } from "../../redux/slices/filter";
import { fetchSort, setActiveShow } from "../../redux/slices/sort";

import Loader from "../UI/Loader/Loader";

const Filter = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilter());
        dispatch(fetchSort());
    }, [])

    const {items:variants, loading:loadingVariants} = useSelector(state => state.filter);
    const {items:sorts, loading:loadingSorts, activeShow:active} = useSelector(state => state.sort);

    
    const changeActive = () => {
        dispatch(setActiveShow(!active));
    }
    const changeSorts = (data) => {
        dispatch(setActiveShow(!active));

        // setSorts((prev) => {
        //     return prev.map(el => {
        //         if(el.data === data) {
        //             return {
        //                 ...el,
        //                 active: true
        //             }
        //         }
        //         return {
        //             ...el,
        //             active: false
        //         }
        //     })
        // });
    }
    const changeVariants = (data) => {
        // setVariants((prev) => {
        //     return prev.map(el => {
        //         if(el.data === data) {
        //             return {
        //                 ...el,
        //                 active: true
        //             }
        //         }

        //         return {
        //             ...el,
        //             active: false
        //         }
        //     })
        // })
    }
    
    return (
        <div className="filter">
            <ul className="variants">
                {
                    loadingVariants && variants.length === 0 
                        ? <Loader/>
                        : (
                            variants.map(el => {
                                return (
                                    <li 
                                        key={el.text}
                                        className={el.active ? 'active' : ''}
                                        onClick={() => changeVariants(el.data)}
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
                        ? <Loader/>
                        : (
                            <>
                                <button onClick={changeActive}>
                                    <img src="images/icons/filter-status.svg" alt="filter icon" /> Сортувати за: <span>{(sorts.find((el) => el.active)).text}</span>
                                </button>
                                <ul className="sorts">
                                    {
                                        sorts.map(el => {
                                            return (
                                                <li
                                                    key={el.text}
                                                    className={el.active? 'active' : ''}
                                                    onClick={() =>changeSorts(el.data)}
                                                >
                                                    за {el.text}
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