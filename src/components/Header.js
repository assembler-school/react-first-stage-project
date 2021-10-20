import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="">
        <h1>Free Videogames</h1>
        <div className="d-flex flex-row gap-3">
          <Link to="/home">
            <h4>Home</h4>
          </Link>

          <Link to="/new-game">
            <h4>New Game</h4>
          </Link>
        </div>
      </header>
    </>
  );
}
