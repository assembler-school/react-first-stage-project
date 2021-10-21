import React, { useContext } from "react";
import { CryptoWebContext } from "../../../context/CryptoWeb/reducer";
import "../../Molecules/CryptoTable/CryptoTable.scss"

export default function CryptoInfo(props) {
  const { user } = useContext(CryptoWebContext);
  const { id } = props;
  const { cryptos } = user;
  const example = cryptos.find((crypto) => crypto.id === id);
  return (
    <div className="table__info">
      <p>{example.name}</p>
      <p>{example.symbol}</p>
      <p>{example.amount}</p>
      <p>{example.amount}</p>
    </div>
  );
}
