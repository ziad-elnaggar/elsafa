import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about container mt-4 mb-5 w-75">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <h3 className="text-center mb-4 d-inline medium">About ELSAFA</h3>
        </div>
        <div className="about-content">
          <p>
            ELSAFA was established in 1994 by Eng. Abdelkader Gadallah as a
            Stockiest and supplier.
          </p>
          <p>
            Since then, We are leading the Egyptian market for providing Oil &
            gas and power generation industries with a vast available supply of
            Piping Components stocked at 4 warehouses located in Alexandria and
            Cairo.
          </p>
          <p>
            With ELSAFA expert professionals who understand your problems & its
            high quality products you will feel the difference.
          </p>
          <p>
            Our goal is to develop repeat business. Customer service is our way
            of creating a strong alliance with you , which is why we say…
          </p>
          <h4 className="text-center bold mt-4">
            “SERVICE IS OUR NUMBER ONE STOCKING ITEM”
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
