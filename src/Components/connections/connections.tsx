import React from "react";
import { connect } from "react-redux";
import { rootState } from "../../types";

const Connections = ({ state }: any) => {
  const { connections } = state;

  return <div className="connections">asdf</div>;
};

const stateToProps = (state: rootState) => {
  return {
    state: state.hero,
  };
};

export default connect(stateToProps)(Connections);
