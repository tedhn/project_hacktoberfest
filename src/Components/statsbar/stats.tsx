import React from "react";

import { ReactComponent as Brain } from "../svg/brain.svg";
import { ReactComponent as Strength } from "../svg/strength.svg";
import { ReactComponent as Energy } from "../svg/energy.svg";
import { ReactComponent as Speed } from "../svg/speed.svg";
import { ReactComponent as Combat } from "../svg/combat.svg";
import { ReactComponent as Durability } from "../svg/durability.svg";

import "./stats.scss";

interface Props {
  stats: any;
}

const Stats: React.FC<Props> = ({ stats }) => {
  return (
    <div className="stats-bar">
      <div className="stats">
        <div className="image">
          <Brain />
        </div>
        <div className="text">{stats.intelligence}</div>
      </div>
      <div className="stats">
        <div className="image">
          <Strength />
        </div>
        <div className="text">{stats.strength}</div>
      </div>
      <div className="stats">
        <div className="image">
          <Energy />
        </div>
        <div className="text">{stats.power}</div>
      </div>
      <div className="stats">
        <div className="image">
          <Speed />
        </div>
        <div className="text">{stats.speed}</div>
      </div>
      <div className="stats">
        <div className="image">
          <Durability />
        </div>
        <div className="text">{stats.durability}</div>
      </div>
      <div className="stats">
        <div className="image">
          <Combat />
        </div>
        <div className="text">{stats.combat}</div>
      </div>
    </div>
  );
};

export default Stats;
