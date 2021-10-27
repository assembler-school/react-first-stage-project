import React from "react";
import "./style.scss";

import Nav from "../Nav";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Nav />
            </div>
        </header>
    );
};

export default Header;