import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import sun from "../../../assets/sun.svg";
import moon from "../../../assets/moon.svg";

import "./style.scss";

const ToggleBtn = () => {
    const { switchMode } = useContext(GlobalContext);

    const [icon, setIcon] = useState(true);

    const iconChange = () => {
        const newIcon = !icon;
        setIcon(newIcon);
    };
    return (
        <div className="toggle_box">
            <span>
                {icon ? (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img src={moon} className="moon-icon" />
                ) : (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img src={sun} className="sun-icon" />
                )}
            </span>
            <div className="toggle_btn" onClick={switchMode}>
                <input type="checkbox" className="checkbox" onChange={iconChange} />
                <div className="circle" />
                <div className="layer" />
            </div>
        </div>
    );
};

export default ToggleBtn;
