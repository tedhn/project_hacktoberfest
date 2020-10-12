import React from "react";
import { Link } from "react-router-dom";

import "./panels.scss";

import { ReactComponent as Brain } from "../svg/brain.svg";
import { ReactComponent as Strength } from "../svg/strength.svg";
import { ReactComponent as Energy } from "../svg/energy.svg";

const Panel = ({ info }: any) => {
  return (
    <div className="panel" data-testid="test-panel">
      <img src={info.image.url} alt={"404"} className="image" />

      <div className="details">
        <div className="name" data-testid="test-name">
          {info.name}
          <div className="fullname" data-testid="test-fullName">
            {` (${info.biography["full-name"]})`}
          </div>
        </div>
        <div className="description">
          <div data-testid="test-birthplace">{`Birthplace : ${info.biography["place-of-birth"]}`}</div>
          <div data-testid="test-alignment">{`Alignment : ${info.biography["alignment"]}`}</div>
        </div>
        <Link to={`/heros/${info.id}`}>Read more...</Link>

        <div className="powerstats">
          <div className="stats">
            <Brain />
            <div className="text" data-testid="test-intelligence">
              {info.powerstats.intelligence}
            </div>
          </div>
          <div className="stats">
            <Strength />
            <div className="text" data-testid="test-strength">
              {info.powerstats.strength}
            </div>
          </div>
          <div className="stats">
            <Energy />
            <div className="text" data-testid="test-energy">
              {info.powerstats.power}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
