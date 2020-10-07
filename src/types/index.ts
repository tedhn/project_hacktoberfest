import { valueUpdate } from "./../store/action/action";
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  VALUE_UPDATE,
} from "../store/action/action";

export interface rootSearchState {
  searchReducer: {};
}

export interface rootInputState {
  inputReducer: string;
}

export interface searchRequest {
  type: typeof SEARCH_REQUEST;
  name: string;
}

export interface searchSuccess {
  type: typeof SEARCH_SUCCESS;
  payload: any;
}
export interface searchFailure {
  type: typeof SEARCH_FAILURE;
}

export interface valueUpdate {
  type: typeof VALUE_UPDATE;
  value: string;
}

export type ACTION_TYPE =
  | searchRequest
  | searchSuccess
  | searchFailure
  | valueUpdate;
