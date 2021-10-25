import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NavBar from "./NavBar";

export default function Header() {
  const { isLogged } = useContext(AuthContext);

  return (
    <>
      <header className=" background-image d-flex flex-column justify-content-end">
        <h1 className="text-center pb-5">Free Videogames</h1>
        {isLogged && (
          <div className="d-flex flex-row justify-content-between pb-1">
            <NavBar />
          </div>
        )}
      </header>
    </>
  );
}
