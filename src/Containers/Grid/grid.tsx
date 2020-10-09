import React from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router";

import Panel from "../../Components/panel/panels";
import { updateSelected } from "../../store/action/action";
import { rootState } from "../../types";

import "./grid.scss";

interface Props {
  state: any;
  update: any;
}

const Grid: React.FC<Props> = ({ state, update }) => {
  let match = useRouteMatch();

  const handleClick = (data: any) => {
    update(data);
  };

  if (state.loading === true) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <div className="grid-container">
        {state.response.results.map((data: any, index: number) => {
          return (
            <Panel
              info={data}
              key={index}
              url={match.url}
              handleClick={handleClick}
            />
          );
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

const ATP = (dispatch: any) => {
  return {
    update: (value: any) => {
      dispatch(updateSelected(value));
    },
  };
};

export default connect(STP, ATP)(Grid);
