import React from "react";
import { Link } from "react-router-dom";

import RegularButton from "../../Atoms/RegularButton/RegularButton";

import "./NoCryptoSign.scss";

export default function NoCryptoSign() {
  return (
    <div className="no-crypto">
      <h2>No cryptoinvestment yet</h2>
      <Link to="/transactions">
        <RegularButton>Get Started</RegularButton>
      </Link>
    </div>
  );
}
