import axios from "axios";

const BASE_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

const HEADERS = {};

export default async function getCryptoList() {
  try {
    const res = await axios.get(`${BASE_URL}?limit=10`, {
      headers: {
        "X-CMC_PRO_API_KEY": "5da150cd-3557-4a3d-9b07-7bf7b57e96dd",
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
