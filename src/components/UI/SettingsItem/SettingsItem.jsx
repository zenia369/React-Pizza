import React from "react";
import './SettingsItem.scss';

const Settings_Item = ({item}) => {
    return (
        <ul className="settings-item">
            {
                item.map((el, i) => {
                    return (
                        <li 
                            key={el.size + i}
                            className={(el.active ? 'active' : '') + (el.disabled ? 'disabled' : '')}
                        >
                            {el.size}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Settings_Item