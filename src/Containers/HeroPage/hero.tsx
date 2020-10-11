import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";

import { heroRequest } from "../../store/action/action";
import { rootState } from "../../types";

import "./hero.scss";

import Stats from "../../Components/statsbar/stats";
import Biography from "../../Components/biography/biography";
import Appearance from "../../Components/appearance/appearance";
import Work from "../../Components/work/work";
import Connections from "../../Components/connections/connections";

interface Props {
  state: any;
  searchHero: any;
}

const Hero: React.FC<Props> = ({ state, searchHero }) => {
  let match = useRouteMatch();

  useEffect(() => {
    //@ts-ignore
    searchHero(match.params.heroid);
  }, []);

  if (state.loading === true) {
    return <div className="loading">Loading</div>;
  } else {
    return (
      <div className="hero">
        <div className="banner">
          <img src={state.response.image.url} alt={"404"} className="image" />
          <div className="text">
            <div className="full-name">
              {state.response.biography["full-name"]}
            </div>
            <div className="name">{state.response.name}</div>
          </div>
        </div>
        <div className="nav-bar">
          <Link to={`${match.url}/status`}>Power Status</Link>
          <Link to={`${match.url}/biography`}>Biography</Link>
          <Link to={`${match.url}/appearance`}>Appearance</Link>
          <Link to={`${match.url}/work`}>Work</Link>
          <Link to={`${match.url}/connections`}>Connections</Link>
        </div>

        <Stats stats={state.response.powerstats} />
        <Biography
          biography={state.response.biography}
          image={state.response.image.url}
          name={state.response.name}
        />
        <Appearance appearance={state.response.appearance} />
        <Work work={state.response.work} />
        <Connections connections={state.response.connections} />
      </div>
    );
  }
};

const stateToProp = (state: rootState) => {
  return {
    state: state.hero,
  };
};

const actionToProps = (dispatch: any) => {
  return {
    searchHero: (value: string) => {
      dispatch(heroRequest(value));
    },
  };
};

export default connect(stateToProp, actionToProps)(Hero);
