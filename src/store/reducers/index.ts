import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./searchReducer";

export const createReducer = () => {
  return combineReducers({ results: searchReducer });
};
