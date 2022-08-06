import { combineReducers, configureStore } from "@reduxjs/toolkit";
import carteReducer from "./cartSlice";
import counterReducer from "./counterSlice";
import productReducer from "./productSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  products: productReducer,
  cart: carteReducer,
});

const store = configureStore({
  reducer: rootReducer,
  
});

export default store;
