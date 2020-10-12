import React from "react";

import "./work.scss";

interface Props {
  work: any;
}

const Work: React.FC<Props> = ({ work }) => {
  return (
    <div className="work" data-testid="test-work">
      <div className="title">Appearance</div>

      <div className="information">
        <div data-testid="test-occupation">Occupation : {work.occupation}</div>
        <div data-testid="test-base">Base : {work.base}</div>
      </div>
    </div>
  );
};

export default Work;
