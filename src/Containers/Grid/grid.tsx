import React from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router";

import Panel from "../../Components/panel/panels";
import { rootState } from "../../types";

import "./grid.scss";

interface Props {
  state: any;
}

const Grid: React.FC<Props> = ({ state }) => {
  let match = useRouteMatch();

  if (state.loading === true) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <div className="grid-container">
        {state.response.results.map((data: any, index: number) => {
          return <Panel info={data} key={index} url={match.url} />;
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
