import React from "react";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { rootState } from "../../types";

import "./hero.scss";

interface Props {
  state: any;
}

const Hero: React.FC<Props> = ({ state }) => {
  let match = useRouteMatch();

  return (
    <div className="hero">
      <div className="banner">
        <img src={state.image.url} alt={"404"} className="image" />
        <div className="text">
          <div className="full-name">{state.biography["full-name"]}</div>
          <div className="name">{state.name}</div>
        </div>
      </div>

      <div className="nav-bar">
        <Link to={`${match.url}/status`}>Power Status</Link>
        <Link to={`${match.url}/biography`}>Biography</Link>
        <Link to={`${match.url}/appearance`}>Appearance</Link>
        <Link to={`${match.url}/work`}>Work</Link>
        <Link to={`${match.url}/connections`}>Connections</Link>
      </div>
    </div>
  );
};

const STP = (state: rootState) => {
  return {
    state: state.info,
  };
};

export default connect(STP)(Hero);
