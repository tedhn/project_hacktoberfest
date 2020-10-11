import React from "react";

import "./connections.scss";

interface Props {
  connections: any;
}

const Connections: React.FC<Props> = ({ connections }) => {
  return (
    <div className="conections">
      <div className="title">Appearance</div>

      <div className="information">
        <div>Group affiliations : {connections["group-affiliation"]}</div>
        <div>Relatives : {connections.relatives}</div>
      </div>
    </div>
  );
};

export default Connections;
