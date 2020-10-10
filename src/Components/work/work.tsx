import React from "react";
import { connect } from "react-redux";
import { rootState } from "../../types";

const Work = ({ state }: any) => {
  const { work } = state;

  return <div className="work">asdf</div>;
};

const stateToProps = (state: rootState) => {
  return {
    state: state.hero,
  };
};

export default connect(stateToProps)(Work);
