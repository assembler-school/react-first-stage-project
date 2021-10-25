import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import homeIcon from "../assets/icons/home-icon.svg";
import logoutIcon from "../assets/icons/logout-icon.svg";
import { useGames } from "../context/GamesContext";

export default function NavBar() {
  const { logOut } = useContext(AuthContext);
  const { gameDetails } = useGames();

  return (
    <>
      {Object.keys(gameDetails).length !== 0 && (
        <Link to="/home" className="text-decoration-none text-light">
          <img className="img-responsive" src={homeIcon} alt="home" />
        </Link>
      )}
      <div className="w-100 text-end">
        <img
          onClick={logOut}
          className="img-responsive text-end"
          src={logoutIcon}
          alt="logout"
        />
      </div>
    </>
  );
}
