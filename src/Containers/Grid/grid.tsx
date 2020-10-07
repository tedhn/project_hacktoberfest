import React from "react";

import Panel from "../../Components/panel/panel";
import "./grid.scss";

const Grid: React.FC = () => {
  return (
    <div className="Grid">
      <Panel />
      <Panel />
      <Panel />
      <Panel />
    </div>
  );
};

export default Grid;
