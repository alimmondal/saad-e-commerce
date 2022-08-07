import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import carteReducer from "./cartSlice";
import counterReducer from "./counterSlice";
import productReducer from "./productSlice";


const persistConfig ={
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  blacklist: ['counter', 'products']
}

const rootReducer = combineReducers({
  counter: counterReducer,
  products: productReducer,
  cart: carteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  
});

export default store;
