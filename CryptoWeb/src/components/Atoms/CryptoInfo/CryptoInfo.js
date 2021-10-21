import React, { useContext } from "react";
import { CryptoWebContext } from "../../../context/CryptoWeb/reducer";

export default function CryptoInfo(props) {
  const { user } = useContext(CryptoWebContext);
  const { id } = props;
  const { cryptos } = user;
  const crypto = cryptos.find((crypto) => crypto.id === id);
  return (
    <div>
      <p>{crypto.name}</p>
      <p>
        <strong>{crypto.symbol}</strong>
      </p>
      <p>{crypto.amount}</p>
      <p>{parseFloat(crypto.quote.USD.price).toFixed(5)}</p>
    </div>
  );
}
