import axios from "axios";
import db from "dotenv";

db.config();
// db.connect({
//   key: process.env.DB_KEY,
// });

const key = process.env.DB_KEY;
const BASE_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

export default async function getCryptoList() {
  try {
    const res = await axios.get(`${BASE_URL}?limit=10`, {
      headers: {
        "X-CMC_PRO_API_KEY": { key },
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization",
      },
    });
    return res;
  } catch (err) {
    return err;
  }
}
