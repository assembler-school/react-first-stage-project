import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const {logOut}= useContext(AuthContext);
  return (
    <>
      <header className="">
        <h1>Free Videogames</h1>
        <div className="d-flex flex-row gap-3">
          <Link to="/home">
            <h4>Home</h4>
          </Link>

            <h4 onClick={logOut}>Log Out</h4>
          
        </div>
      </header>
    </>
  );
}
