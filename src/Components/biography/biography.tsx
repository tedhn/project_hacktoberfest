import React from "react";

import "./biography.scss";

interface Props {
  biography: any;
  image: string;
  name: string;
}

const Biography: React.FC<Props> = ({ biography, image, name }) => {
  console.log(biography);
  return (
    <div className="biography">
      <div className="image-container">
        <div className="title">Biography</div>
        <div className="image">
          <img src={image} alt={"404"} className="image" />
        </div>
      </div>

      <div className="hero-information">
        <div className="data">
          <div>Name :</div>
          <div>{name}</div>
        </div>
        <div className="data">
          <div>Full Name :</div>
          <div>{biography["full-name"]}</div>
        </div>
        <div className="data">
          <div>Alias :</div>
          <ul>
            {biography.aliases.map((value: any, index: number) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
        <div className="data">
          <div>Place of Birth :</div>
          <div>{biography["place-of-birth"]}</div>
        </div>
        <div className="data">
          <div>Plublisher :</div>
          <div>{biography.publisher}</div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
