import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
  const { logOut } = useContext(AuthContext);

  const { gameId } = useParams();
  if (gameId) {
    console.log(gameId);
  }
  return (
    <>
      {gameId && (
        <Link to="/home">
          <h4 className="text-start">Home</h4>
        </Link>
      )}
      <h4 className="align-self-end text-end w-100" onClick={logOut}>
        Log Out
      </h4>
    </>
  );
}
