import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import homeIcon from "../assets/icons/home-icon.svg";
import logoutIcon from "../assets/icons/logout-icon.svg";

export default function NavBar() {
  const { logOut, isLogged } = useContext(AuthContext);

  return (
    <>
      {isLogged && (
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
