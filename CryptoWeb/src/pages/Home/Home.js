import React from "react";

import CryptoBoard from "../../components/Organisms/CryptoBoard/CryptoBoard";
import withLayout from "../../HOC/withLayout";

function Home() {
  return <CryptoBoard />;
}

export default withLayout(Home);
