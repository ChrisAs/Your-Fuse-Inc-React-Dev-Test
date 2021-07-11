import {
  FETCH_CRYPTO_DATA_FAILURE,
  FETCH_CRYPTO_DATA_REQUEST,
  FETCH_CRYPTO_DATA_SUCCESS,
} from "./types";

export const fetchCryptoData = (page) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_CRYPTO_DATA_REQUEST,
      });
      let response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=${page}&sparkline=false`,
      );
      response = await response.json();
      dispatch({
        type: FETCH_CRYPTO_DATA_SUCCESS,
        payload: {
          cryptoData: response,
          totalCurrencies: Number(8434 / 4).toFixed(0), //this is the total number of coins avaiable  i can use to api to find total but currently (sometimes ) its crashing for some unknown reason
          page,
        },
      });
    } catch (error) {
      dispatch({
        type: FETCH_CRYPTO_DATA_FAILURE,
        payload: error?.response?.data ? error?.response?.data : error.message,
      });
    }
  };
};
