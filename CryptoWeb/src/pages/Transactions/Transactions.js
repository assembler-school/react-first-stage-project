import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router";

import CustomDiv from "../../components/Atoms/CustomDiv";
import CryptoTable from "../../components/Molecules/CryptoTable/CryptoTable";
import { CryptoWebContext } from "../../context/CryptoWeb/reducer";
import withLayout from "../../HOC/withLayout";
import getCryptoList from "../../utils/getCryptoList";

function Transactions() {
  const {
    isAuth,
    cryptoFetching,
    cryptoError,
    cryptoSuccess,
    isLoading,
    hasError,
    cryptoList,
  } = useContext(CryptoWebContext);
  useEffect(async () => {
    cryptoFetching();
    const res = await getCryptoList();
    res.status === 200 ? cryptoSuccess(res.data.data) : cryptoError(res);
  }, []);
  return (
    <>
      {!isAuth && <Redirect to="/" />}
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
            <p>Sorry, we are having some problems now</p>
          </div>
        )}
        {cryptoList &&
          !hasError &&
          !isLoading &&
          cryptoList.map((crypto) => (
            <div key={crypto.id} id={crypto.id} className="table__info">
              <p>{crypto.name}</p>
              <p>{crypto.symbol}</p>
              <p>{parseFloat(crypto.quote.USD.price).toFixed(5)}</p>
            </div>
          ))}
      </CustomDiv>
    </>
  );
}

export default withLayout(Transactions);
