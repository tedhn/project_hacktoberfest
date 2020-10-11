import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  HERO_REQUEST,
  HERO_SUCCESS,
  HERO_FAILURE,
} from "../store/action/action";

export interface rootSearchState {}

export interface rootState {
  search: any;
  hero: any;
}

export interface searchRequest {
  type: typeof SEARCH_REQUEST;
  name: string;
  loading: boolean;
  types: any;
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

export interface heroRequest {
  type: typeof HERO_REQUEST;
  id: string;
  loading: boolean;
  types: any;
}

export interface heroSuccess {
  type: typeof HERO_SUCCESS;
  response: any;
  loading: boolean;
}

export interface heroFailure {
  type: typeof HERO_FAILURE;
  response: any;
  loading: boolean;
}

export type ACTION_TYPE =
  | searchRequest
  | searchSuccess
  | searchFailure
  | heroRequest
  | heroSuccess
  | heroFailure;
