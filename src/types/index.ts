import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from "../store/action/action";

export interface rootSearchState {}

export interface rootState {
  results: any;
}

export interface searchRequest {
  type: typeof SEARCH_REQUEST;
  name: string;
}

export interface searchSuccess {
  type: typeof SEARCH_SUCCESS;
  response: any;
}
export interface searchFailure {
  type: typeof SEARCH_FAILURE;
  response: any;
}

export type ACTION_TYPE = searchRequest | searchSuccess | searchFailure;
