import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./searchReducer";
import selectedHeroReducer from "./selectedHeroReducer";

export const createReducer = () => {
  return combineReducers({ results: searchReducer, info: selectedHeroReducer });
};
