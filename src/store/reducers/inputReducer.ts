import { VALUE_UPDATE } from "./../action/action";
import { ACTION_TYPE } from "./../../types/index";

const inputReducer = (state = "", action: ACTION_TYPE) => {
  switch (action.type) {
    case VALUE_UPDATE: {
      return { state: action.value };
    }
    default:
      return state;
  }
};

export default inputReducer;
