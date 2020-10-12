import React from "react";

import "./connections.scss";

interface Props {
  connections: any;
}

const Connections: React.FC<Props> = ({ connections }) => {
  return (
    <div className="conections" data-testid="test-connections">
      <div className="title">Appearance</div>

      <div className="information">
        <div data-testid="test-groupaffiliations">
          Group affiliations : {connections["group-affiliation"]}
        </div>
        <div data-testid="test-relatives">
          Relatives : {connections.relatives}
        </div>
      </div>
    </div>
  );
};

export default Connections;
