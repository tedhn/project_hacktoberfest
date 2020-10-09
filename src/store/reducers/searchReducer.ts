import { ACTION_TYPE } from "./../../types/index";
import {
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
  SEARCH_REQUEST,
} from "../action/action";

const searchReducer = (state = { loading: false }, action: ACTION_TYPE) => {
  switch (action.type) {
    case SEARCH_REQUEST: {
      return { ...state, loading: true };
    }
    case SEARCH_SUCCESS: {
      return { response: action.response, loading: false };
    }
    case SEARCH_FAILURE: {
      return { response: action.response, loading: false };
    }
    default:
      return state;
  }
};

export default searchReducer;
