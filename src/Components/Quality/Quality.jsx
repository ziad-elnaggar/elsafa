import React from "react";
import "./Quality.css";

const Quality = () => {
  return (
    <div className="quality container-md container-fluid my-4 w-75">
      <div className="row">
        <div className="quality-content mb-4">
          <p className="quality-text">
            Since it was founded, <b className="bold">ElSAFA</b> has striven to
            meet the highest standards demanded by customers, as well as by
            national and international institutions. Chasing this goal,
            Professional experts are in charge of guaranteeing the quality of
            the products delivered.
          </p>
          <p className="quality-text">
            Our technicians work hard to evaluate manufacturers and mills,
            monitor fabrication, shipments and material stocking. We verify
            testing and MTCs, controlling each material supplied to our
            customers.
          </p>
          <p className="quality-text">
            All Materials supplied come certified to EN10204 3.1
          </p>
          <p className="quality-text">
            Outside inspection and testing is available upon request.
          </p>
        </div>

        <div className="col-12 d-flex justify-content-center">
          <h3 className="text-center mb-4 d-inline medium">
            Testing available
          </h3>
        </div>

        <ol className="gradient-list">
          <li>Third Party Inspection, via T.U.V</li>
          <li>X-Ray</li>
          <li>Ultra Sonic</li>
          <li>Positive Material Identification</li>
          <li>H.I.C</li>
          <li>Magnetic Particle Inspection</li>
          <li>Dye Pen</li>
          <li>Hardness</li>
        </ol>
      </div>
    </div>
  );
};

export default Quality;
