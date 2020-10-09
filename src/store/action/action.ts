export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const UPDATE_SELECTED = "UPDATE_SELECTED";

export const searchRequest = (name: string) => {
  return {
    type: SEARCH_REQUEST,
    name,
    loading: true,
    types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
  };
};

export const searchSuccess = (payload: any) => {
  return { type: SEARCH_SUCCESS, payload, loading: false };
};

export const searchFailure = (payload: any) => {
  return { type: SEARCH_FAILURE, payload, loading: false };
};

export const updateSelected = (info: any) => {
  return {
    type: UPDATE_SELECTED,
    info,
  };
};
