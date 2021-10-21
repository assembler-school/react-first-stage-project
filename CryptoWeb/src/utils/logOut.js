import React, { useContext } from "react";

import { CryptoWebContext } from "../context/CryptoWeb/reducer";

import { updateCurrentUser } from "./authentication";

let local = JSON.parse(localStorage.getItem("Users"));

export default function logOut() {
  const updatedUsers = updateCurrentUser(local, null);
  localStorage.Users = JSON.stringify(updatedUsers, null, 2);
}
