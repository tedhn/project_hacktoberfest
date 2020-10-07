import React from "react";
import { connect } from "react-redux";
import { valueUpdate } from "../../store/action/action";
import { rootInputState } from "../../types";

import "./input.scss";

interface Props {
  value: string;
  update: any;
}

const InputBox: React.FC<Props> = ({ value, update }) => {
  return (
    <div>
      <input
        className="input"
        data-testid="input-test"
        placeholder="Search your hero"
        value={value}
        onChange={(e) => update(e.target.value)}
      />
    </div>
  );
};

const STP = (state: rootInputState) => {
  return {
    value: state.inputReducer,
  };
};

const ATP = (dispatch: any) => {
  return {
    update: (value: string) => {
      dispatch(valueUpdate(value));
    },
  };
};

export default connect(STP, ATP)(InputBox);
