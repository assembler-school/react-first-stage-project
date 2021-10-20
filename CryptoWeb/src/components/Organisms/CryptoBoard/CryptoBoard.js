import React, { useContext } from "react";

import { CryptoWebContext } from "../../../context/CryptoWeb/reducer";
import CustomDiv from "../../Atoms/CustomDiv";
import NoCryptoSign from "../../Molecules/NoCryptoSign/NoCryptoSign";

export default function CryptoBoard() {
  const { user } = useContext(CryptoWebContext);
  console.log(user)

  return <CustomDiv>{!user.cryptos[0] && <NoCryptoSign />}</CustomDiv>;
}
