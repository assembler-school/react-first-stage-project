import React, { useContext } from "react";
import { CryptoWebContext } from "../../../context/CryptoWeb/reducer";

export default function CryptoInfo(props) {
  const { user } = useContext(CryptoWebContext);
  const { id } = props;
  const { cryptos } = user;
  const example = cryptos.find((crypto) => crypto.id === id);
  console.log(example);
  return (
    <div>
      <p>{example.name}</p>
      <p>{example.symbol}</p>
      <p>{example.amount}</p>
    </div>
  );
}
