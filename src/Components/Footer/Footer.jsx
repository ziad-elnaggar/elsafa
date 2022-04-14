import React from "react";
import { Link } from "react-router-dom";
import elsafapdf from "../../Assets/ElSAFAProfile.pdf";
import header2 from "../../Assets/header2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="row pdf py-2">
            <div className="col-sm-8 col-12 d-flex justify-content-sm-center align-items-center mb-sm-0 mb-3">
              <i className="fa fa-file-pdf-o me-2" aria-hidden="true"></i>
              Download our latest products guide
            </div>
            <div className="col-sm-4 col-12 d-flex justify-content-sm-center justify-content-end align-items-center">
              <a
                type="button"
                className="btn btn-outline-dark ms-sm-3 ms-0"
                download
                href={elsafapdf}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
                </svg>
                Download
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row content mt-1">
            <div className="col-lg-2 col-sm-3 col-6 mt-3 d-sm-block d-none">
              <img className="logo" src={header2} alt="" />
            </div>
            <div className="col-lg-4 col-5 d-flex justify-content-center mt-sm-3 mt-4 text-sm-start text-center">
              <div className="col-6">
                <Link className="nav-text d-block mt-2" to="/about">
                  About
                </Link>
                <Link className="nav-text d-block mt-2" to="/contacts">
                  Contacts
                </Link>
              </div>
              <div className="col-6">
                <Link className="nav-text d-block mt-2" to="/quality">
                  Quality
                </Link>
                <Link className="nav-text d-block mt-2" to="/clients">
                  Clients
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-7 address mt-3">
              <div className="d-flex align-items-center mt-2">
                <div className="col-1 d-flex justify-content-center">
                  <i className="fa fa-map-marker me-3" aria-hidden="true"></i>
                </div>
                <p className="mb-0 ps-2">
                  613B Elhorreya Avenue
                  <br />
                  Ziznia-Alexandria -Egypt
                </p>
              </div>
              <div className="d-flex align-items-center mt-2">
                <div className="col-1 d-flex justify-content-center">
                  <i className="fa fa-envelope-o me-3" aria-hidden="true"></i>
                </div>
                <p className="mb-0 ps-2">Sales@elsafatradingco.com</p>
              </div>
            </div>
            <div
              className="social col-lg-3 col-sm-12 col-4 d-flex justify-content-lg-around justify-content-sm-between
              justify-content-start w-md-50 mt-3"
            >
              <p className="mb-0 medium social-text">Contact us via</p>
              <div className="icons d-flex justify-content-between w-25">
                <i className="fa fa-facebook-square mx-sm-0 mx-3" aria-hidden="true"></i>
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="container cr">
          <div className="row text-start">
            <p className="mb-0">
              <i className="fa fa-copyright" aria-hidden="true"></i>
              ELSAFA Trading Company.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
