import React from "react";
import { connect } from "react-redux";

import Panel from "../../Components/panel/panels";
import { rootState } from "../../types";

import "./grid.scss";

interface Props {
  state: any;
}

const Grid: React.FC<Props> = ({ state }) => {
  console.log(state);

  if (state.results === undefined) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <div className="grid-container">
        {state.results.map((data: any, index: number) => {
          return <Panel info={data} key={index} />;
        })}
      </div>
    );
  }
};

const STP = (state: rootState) => {
  return {
    state: state.results,
  };
};

export default connect(STP)(Grid);
