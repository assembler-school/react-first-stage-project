import React from "react";
import { Link } from "react-router-dom";
import ToggleBtn from "../ToggleBtn";
import "./style.scss";

const Nav = () => (
    <nav className="o__nav">
        <ul className="o__nav_link">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorites">My Favorites</Link></li>
            <li><Link to="/log-in">Log In</Link></li>
        </ul>
        <div>
            <ToggleBtn />
        </div>
    </nav>
);

export default Nav;
