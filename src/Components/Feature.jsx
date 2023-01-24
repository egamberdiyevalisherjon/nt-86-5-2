import React from "react";

import products from "../products.json";

const Feature = ({ title, description }) => {
  return (
    <div>
      <h2 className="display-4">{title}</h2>
      <p>{description}</p>
      <img src="/vite.svg" alt="" />
      {products.map((p) => (
        <div>
          <h3>{p.name}</h3>
          <p>{p.price}</p>
          
        </div>
      ))}
      {/* {products.map((p) =>
        React.createElement("div", null, [
          React.createElement("h3", null, p.name),
          React.createElement("p", null, p.price),
        ])
      )} */}
    </div>
  );
};

export default Feature;
