import React, { useContext } from "react";
import { CryptoWebContext } from "../../../context/CryptoWeb/reducer";
import "./header.scss";

function Header() {
  const { user } = useContext(CryptoWebContext);

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
        <div className="header__media__item"> facebook</div>
        <div className="header__media__item"> instagram</div>
        <div className="header__media__item"> twitter</div>
      </div>
      <div className="header__userName">
        <div>{user.username}</div>
      </div>
    </header>
  );
}

export default Header;
