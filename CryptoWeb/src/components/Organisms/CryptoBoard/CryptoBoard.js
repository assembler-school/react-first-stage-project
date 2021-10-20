import React, { useContext } from "react";

import { CryptoWebContext } from "../../../context/CryptoWeb/reducer";
import CustomDiv from "../../Atoms/CustomDiv";
import CryptoTable from "../../Molecules/CryptoTable/CryptoTable";
import NoCryptoSign from "../../Molecules/NoCryptoSign/NoCryptoSign";

export default function CryptoBoard() {
  const { user } = useContext(CryptoWebContext);
  return (
    <CustomDiv>
      {user.cryptos[0] ? <CryptoTable /> : <NoCryptoSign />}
    </CustomDiv>
  );
}
