import {
  FETCH_CRYPTO_DATA_REQUEST,
  FETCH_CRYPTO_DATA_SUCCESS,
  FETCH_CRYPTO_DATA_FAILURE,
} from "./types";

const initialState = {
  loading: false,
  cryptoData: [],
  page: 1,
  totalCurrencies: 0,
  error: "",
};

export const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTO_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CRYPTO_DATA_SUCCESS:
      return {
        loading: false,
        cryptoData: action.payload.cryptoData,
        totalCurrencies: action.payload.totalCurrencies,
        page: action.payload.page,
        error: "",
      };
    case FETCH_CRYPTO_DATA_FAILURE:
      return {
        loading: false,
        cryptoData: [],
        totalCurrencies: 0,
        error: action.payload,
      };
    default:
      return state;
  }
};
