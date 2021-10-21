import React, { useContext } from "react";
import { CryptoWebContext } from "../../../context/CryptoWeb/reducer";
import CryptoInfo from "../../Atoms/CryptoInfo/CryptoInfo";

export default function CryptoTable() {
  const { user } = useContext(CryptoWebContext);

  return (
    <>
      <div>
        <p>Crypto</p>
        <p>Symbol</p>
        <p>Quantity</p>
        <p>Price</p>
      </div>
      {user.cryptos.map((crypto) => {
        return <CryptoInfo key={crypto.id} id={crypto.id} />;
      })}
      {console.log(user.cryptos)}
    </>
  );
}
