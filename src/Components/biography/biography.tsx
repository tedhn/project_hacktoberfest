import React from "react";

import "./biography.scss";

interface Props {
  biography: any;
  image: string;
  name: string;
}

const Biography: React.FC<Props> = ({ biography, image, name }) => {
  return (
    <div className="biography" data-testid="test-biography">
      <div className="image-container">
        <div className="title">Biography</div>
        <div className="image">
          <img src={image} alt={"404"} className="image" />
        </div>
      </div>

      <div className="hero-information">
        <div className="data">
          <div>Name :</div>
          <div data-testid="test-name">{name}</div>
        </div>
        <div className="data">
          <div>Full Name :</div>
          <div data-testid="test-fname">{biography["full-name"]}</div>
        </div>
        <div className="data">
          <div>Alias :</div>
          <ul data-testid="test-alias">
            {biography.aliases.map((value: any, index: number) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
        <div className="data">
          <div>Place of Birth :</div>
          <div data-testid="test-placeOfBirth">
            {biography["place-of-birth"]}
          </div>
        </div>
        <div className="data">
          <div>Plublisher :</div>
          <div data-testid="test-publisher">{biography.publisher}</div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
