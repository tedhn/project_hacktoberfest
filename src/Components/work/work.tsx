import React from "react";

import "./work.scss";

interface Props {
  work: any;
}

const Work: React.FC<Props> = ({ work }) => {
  return (
    <div className="work">
      <div className="title">Appearance</div>

      <div className="information">
        <div>Occupation : {work.occupation}</div>
        <div>Base : {work.base}</div>
      </div>
    </div>
  );
};

export default Work;
