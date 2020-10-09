import React from "react";
import { Link } from "react-router-dom";

import "./home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <button className="button">
        <Link to="/search">Start Searching!</Link>
      </button>
    </div>
  );
};

export default Home;
