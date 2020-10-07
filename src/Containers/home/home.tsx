import React from "react";

import InputBox from "../../Components/inputbox/input";
import Grid from "../Grid/grid";

const Home: React.FC = () => {
  return (
    <div className="home">
      <InputBox />
      <Grid />
    </div>
  );
};

export default Home;
