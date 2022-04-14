import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts container my-4">
      <div className="row">
        <div className="col-12">
          <h3 className="bold">You can reach us at:</h3>
        </div>
        <div className="col-sm-6 col-12 contact-col">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <p>
            613B Elhorreya Avenue
            <br />
            Ziznia-Alexandria -Egypt
          </p>
        </div>
        <div className="col-sm-6 col-12 contact-col">
          <i className="fa fa-mobile" aria-hidden="true"></i>
          <p>(+20) 12221424-76 - 1152300043</p>
        </div>
        <div className="col-sm-6 col-12 contact-col">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <p>Sales@elsafatradingco.com</p>
        </div>
        <div className="col-sm-6 col-12 contact-col">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <p>(+203) 5738370 -5744647 -5743044</p>
        </div>
        <div className="col-sm-6 col-12 contact-col">
          <i className="fa fa-globe" aria-hidden="true"></i>
          <p>www.elsafatradingco.com</p>
        </div>
        <div className="col-sm-6 col-12 contact-col">
          <i className="fa fa-fax" aria-hidden="true"></i>
          <p>(+203) 5763577 - 5744647</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
