import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';

import userReducer from "../features/userSlice";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  user: userReducer,
});

const persistConfig = { key: "root", storage };

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
