import React from "react";
import { Link } from "react-router-dom";

import "./home.scss";

const Home: React.FC = () => {
  return (
    <div className="home" data-testid="test-home">
      <button className="button">
        <Link to="/search" data-testid="test-link">
          Start Searching!
        </Link>
      </button>
    </div>
  );
};

export default Home;
