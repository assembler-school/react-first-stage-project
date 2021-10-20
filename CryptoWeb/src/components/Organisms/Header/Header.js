import React from "react";
import "./header.scss";

function Header() {
  return (
    <header>
      <div className="header__nav">
        <div className="header__nav__item">menu</div>
        <div className="header__nav__item">search</div>
        <div className="header__nav__item">logout</div>
      </div>
      <div className="header__title">
        <h1>CryptoWeb</h1>
      </div>
      <div className="header__media">
        <div  className="header__media__item"> facebook</div>
        <div  className="header__media__item"> instagram</div>
        <div className="header__media__item"> twitter</div>
      </div>
      <div className="header__userName">
        <div>hola</div>
      </div>
    </header>
  );
}

export default Header;
