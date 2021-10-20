import React from "react";
import "./header.scss";

function Header() {
  return (
    <header>
      <div className="header__nav">
        <div className="header__nav__item"><i class="fas fa-bars"></i> Menu</div>
        <div className="header__nav__item"><i class="fas fa-search"></i> Search</div>
      </div>
      <div className="header__title">
        <h1>CryptoWeb</h1>
      </div>
      <div className="header__media">
        <div  className="header__media__item"><i class="fab fa-facebook-square"></i></div>
        <div  className="header__media__item"><i class="fab fa-instagram"></i></div>
        <div className="header__media__item"><i class="fab fa-twitter-square"></i></div>
      </div>
      <div className="header__userName">
        <div>hola</div>
        <div className="header__nav__item"><i class="fas fa-sign-out-alt"></i></div>
      </div>
    </header>
  );
}

export default Header;
