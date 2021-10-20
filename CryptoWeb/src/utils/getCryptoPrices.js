import axios from "axios";

const BASE_URL = "https://pro-api.coinmarketcap.com/v1/tools/price-conversion?";
const HEADER = "5da150cd-3557-4a3d-9b07-7bf7b57e96dd";

export default async function getCryptoPrices(id, amount) {
  try {
    const res = await axios.get(`${BASE_URL}id=${id}&amount=${amount}`, {
      headers: HEADER,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}
