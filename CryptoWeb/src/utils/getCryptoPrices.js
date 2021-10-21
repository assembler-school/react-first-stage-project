import axios from "axios";

const KEY = process.env.REACT_APP_COINMARKET_KEY;

export default async function getCryptoPrices(id, amount) {
  try {
    const res = await axios.get(
      `/tools/price-conversion?id=${id}&amount=${amount}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": KEY,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization",
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
}
