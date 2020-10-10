import { ACTION_TYPE } from "../../types";
import { HERO_FAILURE, HERO_REQUEST, HERO_SUCCESS } from "../action/action";

const heroReducer = (state = { loading: true }, action: ACTION_TYPE) => {
  switch (action.type) {
    case HERO_REQUEST: {
      return { ...state, loading: true };
    }
    case HERO_SUCCESS: {
      return { response: action.response, loading: false };
    }
    case HERO_FAILURE: {
      return { response: action.response, loading: false };
    }
    default:
      return state;
  }
};

export default heroReducer;
