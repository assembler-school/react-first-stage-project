import axios from "axios";

const KEY = process.env.REACT_APP_COINMARKET_KEY;

export default async function getCryptoPrices(id, amount) {
  try {
    const res = await axios.get(
      `/tools/price-conversion?id=${id}&amount=${amount}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": KEY,
        },
      }
    );
    return res;
  } catch (err) {
    return err;
  }
}
