import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk]; // this stores an array of middlewares so that we can pass it to the applyMiddleware function

// the createStore method form redux takes an a rootReducer, initialState and middlwares
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
