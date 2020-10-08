import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchRequest } from "../../store/action/action";

import "./input.scss";

interface Props {
  search: any;
}

const InputBox: React.FC<Props> = ({ search }) => {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    search(value);
  };

  return (
    <div className="container">
      <div className="searchBox">
        <input
          className="input"
          data-testid="input-test"
          placeholder="Search your hero"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button>
          <Link to={`/${value}`} onClick={handleSearch}>
            Search{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

const ATP = (dispatch: any) => {
  return {
    search: (value: string) => {
      dispatch(searchRequest(value));
    },
  };
};

export default connect(null, ATP)(InputBox);
