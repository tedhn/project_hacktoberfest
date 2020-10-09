import { UPDATE_SELECTED } from "./../action/action";
import { ACTION_TYPE } from "../../types";

const selectedHero = (info = {}, action: ACTION_TYPE) => {
  switch (action.type) {
    case UPDATE_SELECTED: {
      return action.info;
    }

    default:
      return info;
  }
};

export default selectedHero;
