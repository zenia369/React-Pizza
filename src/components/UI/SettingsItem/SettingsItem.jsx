import React from "react";
import './SettingsItem.scss';

const Settings_Item = ({item, click, name, id}) => {
    const clickHandle = (size) => {
        click(name, size, id);
    }
    return (
        <ul className="settings-item">
            {
                item.map((el, i) => {
                    return (
                        <li 
                            key={el.size + i}
                            className={(el.active ? 'active' : '') + (el.disabled ? 'disabled' : '')}
                            onClick={!el.disabled ? () => clickHandle(el.size) : null}
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