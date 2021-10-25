import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

import "./style.scss";

const NotFound = () => {
    const { darkMode } = useContext(GlobalContext);
    return (
        <main className={`main ${darkMode ? "bg-dark" : "bg-light"}`}>
            <div className="container">
                <div className="display-content">
                    <h1>Page Not Found </h1>
                </div>
            </div>
        </main>
    );
}

export default NotFound;