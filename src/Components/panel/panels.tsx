import React from "react";
import { Link } from "react-router-dom";

import "./panels.scss";

import { ReactComponent as Brain } from "../svg/brain.svg";
import { ReactComponent as Strength } from "../svg/strength.svg";
import { ReactComponent as Energy } from "../svg/energy.svg";

const Panel = ({ info, url, handleClick }: any) => {
  const handleUpdate = () => {
    handleClick(info);
  };

  return (
    <div className="panel">
      <img src={info.image.url} alt={"404"} className="image" />

      <div className="details">
        <div className="name">
          {info.name}
          <div className="fullname"> {` (${info.biography["full-name"]})`}</div>
        </div>
        <div className="description">
          <div>{`Birthplace : ${info.biography["place-of-birth"]}`}</div>
          <div>{`Alignment : ${info.biography["alignment"]}`}</div>
        </div>
        <Link to={`/heros/${info.name}`} onClick={handleUpdate}>
          Read more...
        </Link>

        <div className="powerstats">
          <div className="stats">
            <Brain />
            <div className="text">{info.powerstats.intelligence}</div>
          </div>
          <div className="stats">
            <Strength />
            <div className="text">{info.powerstats.strength}</div>
          </div>
          <div className="stats">
            <Energy />
            <div className="text">{info.powerstats.power}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
