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
      const response = { data: { data: [] } };
      dispatch({
        type: FETCH_CRYPTO_DATA_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_CRYPTO_DATA_FAILURE,
        payload: error?.response?.data ? error?.response?.data : error.message,
      });
    }
  };
};
