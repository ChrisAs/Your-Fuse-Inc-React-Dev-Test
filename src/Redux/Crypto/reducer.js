import {
  FETCH_CRYPTO_DATA_REQUEST,
  FETCH_CRYPTO_DATA_SUCCESS,
  FETCH_CRYPTO_DATA_FAILURE,
} from "./types";

const initialState = {
  loading: false,
  data: [],
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
        data: action.payload,
        error: "",
      };
    case FETCH_CRYPTO_DATA_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
