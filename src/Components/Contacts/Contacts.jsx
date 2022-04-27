import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row mb-4 contacts">
        <div className="col-7 contact-form pt-4">
          <form action="" method="POST" id="contact-form">
            <div className="row">
            <h3 className="bold py-4">Get in touch</h3>
              <div className="col-md-12 col-12">
                <div className="form-group">
                  <input type="text" className="form-control" name="name" placeholder="Name" autoComplete="off" />
                </div>
              </div>
              <div className="col-md-12 col-12">
                <div className="form-group">
                  <input type="text" className="form-control" name="email" placeholder="E-mail" autoComplete="off" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" autoComplete="off" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea type="text" className="form-control" name="message" placeholder="Message" rows={4}></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group d-flex justify-content-end">
                  <button type="submit" className="btn btn-outline-dark">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-5 contact-address ps-md-4 pt-4">
          <div className="row">
            <h3 className="bold pt-4 pb-2">You can reach us at:</h3>
            <div className="col-sm-12 col-12 contact-col">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p>
                613B Elhorreya Avenue
                <br />
                Ziznia-Alexandria -Egypt
              </p>
            </div>
            <div className="col-sm-12 col-12 contact-col">
              <i className="fa fa-mobile" aria-hidden="true"></i>
              <p>(+20) 12221424-76 - 1152300043</p>
            </div>
            <div className="col-sm-12 col-12 contact-col">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <p>Sales@elsafatradingco.com</p>
            </div>
            <div className="col-sm-12 col-12 contact-col">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <p>(+203) 5738370 -5744647 -5743044</p>
            </div>
            <div className="col-sm-12 col-12 contact-col">
              <i className="fa fa-globe" aria-hidden="true"></i>
              <p>www.elsafatradingco.com</p>
            </div>
            <div className="col-sm-12 col-12 contact-col">
              <i className="fa fa-fax" aria-hidden="true"></i>
              <p>(+203) 5763577 - 5744647</p>
            </div>

            <hr />

            <div className="emails">
              <div className="col-sm-12 col-12">
                <p className="medium">Sales Department</p>
                <p>Sales@elsafatradingco.com</p>
              </div>

              <div className="col-sm-12 col-12">
                <p className="medium">Import Department</p>
                <p>Adnan@elsafatradingco.com</p>
              </div>

              <div className="col-sm-12 col-12">
                <p className="medium">Business Development Department</p>
                <p>Ismail@elsafatradingco.com </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
