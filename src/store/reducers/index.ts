import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./searchReducer";
import heroReducer from "./heroReducer";

export const createReducer = () => {
  return combineReducers({ search: searchReducer, hero: heroReducer });
};
