import React, { useState } from "react";

import { ReactComponent as Gender } from "../svg/gender.svg";
import { ReactComponent as Height } from "../svg/height.svg";
import { ReactComponent as Weight } from "../svg/weight.svg";

import "./appearance.scss";

interface Props {
  appearance: any;
}

const Appearance: React.FC<Props> = ({ appearance }) => {
  const [units, setUnits] = useState(0);
  const toggleUnits = () => {
    if (units === 0) {
      setUnits(1);
    } else {
      setUnits(0);
    }
  };

  return (
    <div className="appearance">
      <div className="title">Appearance</div>
      <div onClick={toggleUnits} className="button">
        Toggle Units
      </div>
      <div className="info-bar">
        <div className="information">
          <div className="image">
            <Gender />
          </div>
          <div className="text">{appearance.gender}</div>
        </div>
        <div className="information">
          <div className="image">
            <Height />
          </div>
          <div className="text">{appearance.height[units]}</div>
        </div>
        <div className="information">
          <div className="image">
            <Weight />
          </div>
          <div className="text">{appearance.weight[units]}</div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
