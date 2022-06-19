import React, {useState} from "react";

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
    const [activeSort, setActiveSort] = useState('популярністю');
    const [sorts, setSorts] = useState([
        {
            text: 'популярністю',
            data : 'popularity'
        },
        {
            text: 'ціною',
            data : 'price'
        },
        {
            text: 'алфавітом',
            data : 'alphabet'
        },
    ])

    return (
        <div className="filter">
            <ul className="variants">
                {
                    variants.map(el => {
                        return (
                            <li 
                                key={el.text}
                                className={el.active ? 'active' : ''}
                                data-variant={el.data}
                            >
                                {el.text}
                            </li>
                        )
                    })
                }
            </ul>
            <div className="sort">
                <button>
                    Сортувати за: {activeSort}
                </button>
                <ul className="sorts">
                    {
                        sorts.map(el => {
                            return (
                                <li
                                    key={el.text}
                                    data-sotr={el.data}
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