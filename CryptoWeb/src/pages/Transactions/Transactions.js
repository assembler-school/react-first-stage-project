import React, { useContext, useEffect } from "react";
import CryptoInfo from "../../components/Atoms/CryptoInfo/CryptoInfo";
import CustomDiv from "../../components/Atoms/CustomDiv";
import CryptoTable from "../../components/Molecules/CryptoTable/CryptoTable";
import { CryptoWebContext } from "../../context/CryptoWeb/reducer";
import withLayout from "../../HOC/withLayout";
import getCryptoList from "../../utils/getCryptoList";

function Transactions() {
  const {
    cryptoFetching,
    cryptoError,
    cryptoSuccess,
    isLoading,
    hasError,
    errorMessage,
    cryptoList,
  } = useContext(CryptoWebContext);
  useEffect(async () => {
    cryptoFetching();
    const res = await getCryptoList();
    res.status === 200 ? cryptoSuccess(res.data.data) : cryptoError(res);
  }, []);
  return (
    <CustomDiv>
      <CryptoTable />
      {isLoading && (
        <div>
          <p>Loading cryptocurrencies...</p>
        </div>
      )}
      {!isLoading && hasError && (
        <div>
          <p>Something went wrong</p>
          <p>jfdhcjkd</p>
        </div>
      )}
      {!isLoading &&
        !hasError &&
        cryptoList.map((crypto) => (
          <div key={crypto.id} id={crypto.id} className="table__info">
            <p>{crypto.name}</p>
            <p>{crypto.symbol}</p>
            <p>{parseFloat(crypto.quote.USD.price).toFixed(5)}</p>
          </div>
        ))}
    </CustomDiv>
  );
}

export default withLayout(Transactions);
