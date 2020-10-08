export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const searchRequest = (name: string) => {
  return {
    type: SEARCH_REQUEST,
    name,
    types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
  };
};

export const searchSuccess = (payload: any) => {
  return { type: SEARCH_SUCCESS, payload };
};

export const searchFailure = (payload: any) => {
  return { type: SEARCH_FAILURE, payload };
};
