import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  UPDATE_SELECTED,
} from "../store/action/action";

export interface rootSearchState {}

export interface rootState {
  results: any;
  info: any;
}

export interface searchRequest {
  type: typeof SEARCH_REQUEST;
  name: string;
  loading: boolean;
}
export interface updateSelected {
  type: typeof UPDATE_SELECTED;
  info: any;
}

export interface searchSuccess {
  type: typeof SEARCH_SUCCESS;
  response: any;
  loading: boolean;
}
export interface searchFailure {
  type: typeof SEARCH_FAILURE;
  response: any;
  loading: boolean;
}

export type ACTION_TYPE =
  | searchRequest
  | searchSuccess
  | searchFailure
  | updateSelected;
