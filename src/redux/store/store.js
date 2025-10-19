import { configureStore, combineReducers } from "@reduxjs/toolkit";
import playerReducer from "../reducers/playerReducer";
import likedReducer from "../reducers/likedReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  player: playerReducer,
  liked: likedReducer,
  search: searchReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
