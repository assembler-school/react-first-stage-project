import React, { useContext } from "react";
import { CryptoWebContext } from "../../../context/CryptoWeb/reducer";
import CustomDiv from "../../Atoms/CustomDiv";

export default function InfoBoard() {
  const { user } = useContext(CryptoWebContext);
  const totalCrypto = user.cryptos
    .map((crypto) => crypto.quote.USD.price)
    .reduce((a, b) => a + b);
  const totalInvestment = user.USD + totalCrypto;
  return (
    <CustomDiv>
      <ul>
        <li>
          <strong>Your Account:</strong>
        </li>
        <li>
          <strong>USD:</strong>
          {user.USD}
        </li>
        <li>
          <strong>Total Crypto:</strong>
          {parseFloat(totalCrypto).toFixed(5)}
        </li>
        <li>
          <strong>Total Investment:</strong>
          {parseFloat(totalInvestment).toFixed(5)}
        </li>
        <li>
          <strong>Evolution:</strong>
          {`${parseFloat(((totalInvestment - 100000) * 100) / 100000).toFixed(
            5
          )}%`}
        </li>
      </ul>
    </CustomDiv>
  );
}
