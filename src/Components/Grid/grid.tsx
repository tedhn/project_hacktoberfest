import React from "react";
import { connect } from "react-redux";

import Panel from "../panel/panels";
import { rootState } from "../../types";

import "./grid.scss";

interface Props {
  state: any;
}

const Grid: React.FC<Props> = ({ state }) => {
  if (state.loading === true) {
    return (
      <div className="loading" data-testid="test-loading">
        Loading...
      </div>
    );
  } else {
    return (
      <div className="grid-container" data-testid="test-grid">
        {state.response.results.map((data: any, index: number) => {
          return <Panel info={data} key={index} />;
        })}
      </div>
    );
  }
};

const stateToProps = (state: rootState) => {
  return {
    state: state.search,
  };
};

export default connect(stateToProps)(Grid);
