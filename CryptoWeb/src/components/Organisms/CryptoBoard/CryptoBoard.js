import React, { useContext } from "react";

// import { CryptoWebContext } from "../../../context/CryptoWeb/reducer";
import CustomDiv from "../../Atoms/CustomDiv";
import CryptoTable from "../../Molecules/CryptoTable/CryptoTable";
import NoCryptoSign from "../../Molecules/NoCryptoSign/NoCryptoSign";

export default function CryptoBoard() {
  const local = JSON.parse(localStorage.getItem("Users"));
  const currentUser = local.find((e) => e.isCurrentUser);
  return (
    <CustomDiv>
      {currentUser.cryptos[0] ? <CryptoTable /> : <NoCryptoSign />}
    </CustomDiv>
  );
}
