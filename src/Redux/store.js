import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { cryptoReducer } from "./Crypto/reducer";
const rootReducer = combineReducers({
  crypto: cryptoReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
