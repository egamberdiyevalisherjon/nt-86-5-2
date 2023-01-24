import React from "react";
import Feature from "./Feature";

function Showcase() {
  return (
    <section id="showcase">
      <div className="container">
        <h2>Showcase (Changed)</h2>
        <Feature
          title="Fast Delivery"
          description="Lorem ipsum dollor sit amet."
        />
        <Feature
          title="Super Secure Service"
          description="Lorem ipsum dollor sit amet."
        />
      </div>
    </section>
  );
}

export default Showcase;
