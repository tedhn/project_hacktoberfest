import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "./searchReducer";
import inputReducer from "./inputReducer";

export const createReducer = () => {
  return combineReducers({ search: searchReducer, value: inputReducer });
};
