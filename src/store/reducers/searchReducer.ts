import { ACTION_TYPE } from "./../../types/index";
import {
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
  SEARCH_REQUEST,
} from "../action/action";

const searchReducer = (state = {}, action: ACTION_TYPE) => {
  switch (action.type) {
    case SEARCH_REQUEST: {
      return { ...state };
    }
    case SEARCH_SUCCESS: {
      return { ...state, user: action.payload };
    }
    case SEARCH_FAILURE: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default searchReducer;
