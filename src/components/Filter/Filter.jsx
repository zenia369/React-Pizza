import React, {useState} from "react";
import './Filter.scss';

const Filter = (props) => {
    const [variants, setVariants] = useState([
        {
            text: "всі",
            data: 'all',
            active: true,
        },
        {
            text: "м'ясні",
            data: 'meat',
            active: false,
        },
        {
            text: "вегетаріанські",
            data: 'vegetarian',
            active: false,
        },
        {
            text: "гриль",
            data: 'grill',
            active: false,
        },
        {
            text: "гострі",
            data: 'hot',
            active: false,
        },
        {
            text: "закриті",
            data: 'closed',
            active: false,
        },
    ]);
    const [sorts, setSorts] = useState([
        {
            text: 'популярністю',
            data : 'popularity',
            active: true
        },
        {
            text: 'ціною',
            data : 'price',
            active: false
        },
        {
            text: 'алфавітом',
            data : 'alphabet',
            active: false
        },
    ]);
    const [active, setActive] = useState(false);

    const changeActive = () => {
        setActive(!active)
    }
    const changeSorts = (data) => {
        setActive(false);
        setSorts((prev) => {
            return prev.map(el => {
                if(el.data === data) {
                    return {
                        ...el,
                        active: true
                    }
                }
                return {
                    ...el,
                    active: false
                }
            })
        });
    }
    const changeVariants = (data) => {
        setVariants((prev) => {
            return prev.map(el => {
                if(el.data === data) {
                    return {
                        ...el,
                        active: true
                    }
                }

                return {
                    ...el,
                    active: false
                }
            })
        })
    }
    
    return (
        <div className="filter">
            <ul className="variants">
                {
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
                }
            </ul>
            <div className={active? 'sort active' : 'sort' }>
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
            </div>
        </div>
    )
}

export default Filter