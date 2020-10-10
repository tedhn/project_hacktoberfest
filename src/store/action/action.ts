export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const HERO_REQUEST = "HERO_REQUEST";
export const HERO_SUCCESS = "HERO_SUCCESS";
export const HERO_FAILURE = "HERO_FAILURE";


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


export const heroRequest = (name: string) => {
  return {
    type: HERO_REQUEST,
    name,
    loading: true,
    types: [HERO_REQUEST, HERO_SUCCESS, HERO_FAILURE],
  };
};

export const heroSuccess = (payload: any) => {
  return { type: HERO_SUCCESS, payload, loading: false };
};

export const heroFailure = (payload: any) => {
  return { type: HERO_FAILURE, payload, loading: false };
};

