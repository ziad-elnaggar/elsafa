import React from "react";
import abuqir from "../../Assets/clients/abuqir.png";
import alexandria from "../../Assets/clients/alexandria.png";
import amoc from "../../Assets/clients/amoc.png";
import aprc from "../../Assets/clients/aprc.png";
import delta from "../../Assets/clients/delta.png";
import enppi from "../../Assets/clients/enppi.png";
import esiic from "../../Assets/clients/esiic.png";
import gasco from "../../Assets/clients/gasco.png";
import npc from "../../Assets/clients/npc.png";
import nrpc from "../../Assets/clients/nrpc.png";
import petrojet from "../../Assets/clients/petrojet.png";
import sumed from "../../Assets/clients/sumed.png";
import "./Clients.css";

const Clients = () => {
  return (
    <div className="clients container text-center my-4">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <h3 className="text-center mb-2 d-inline medium">Take a look at our Clients</h3>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-4 col-sm-3 col-md-2 p-3 d-flex justify-content-center align-items-center">
          <div className="client d-flex justify-content-center h-100 w-100">
            <img src={alexandria} alt="" />
          </div>
        </div>
        <div className="col-4 col-sm-3 col-md-2 p-3 d-flex justify-content-center align-items-center">
          <div className="client d-flex justify-content-center h-100 w-100">
            <img src={abuqir} alt="" />
          </div>
        </div>
        <div className="col-4 col-sm-3 col-md-2 p-3 d-flex justify-content-center align-items-center">
          <div className="client d-flex justify-content-center h-100 w-100">
            <img src={amoc} alt="" />
          </div>
        </div>
        <div className="col-4 col-sm-3 col-md-2 p-3 d-flex justify-content-center align-items-center">
          <div className="client d-flex justify-content-center h-100 w-100">
            <img src={aprc} alt="" />
          </div>
        </div>
        <div className="col-4 col-sm-3 col-md-2 p-3 d-flex justify-content-center align-items-center">
          <div className="client d-flex justify-content-center h-100 w-100">
            <img src={delta} alt="" />
          </div>
        </div>
        <div className="col-4 col-sm-3 col-md-2 p-3 d-flex justify-content-center align-items-center">
          <div className="client d-flex justify-content-center h-100 w-100">
            <img src={enppi} alt="" />
          </div>
        </div>
        <div className="col-4 col-sm-3 col-md-2 p-3 d-flex justify-content-center align-items-center">
          <div className="client d-flex justify-content-center h-100 w-100">
            <img src={esiic} alt="" />
          </div>
        </div>
        <div className="col-4 col-sm-3 col-md-2 p-3 d-flex justify-content-center align-items-center">
          <div className="client d-flex justify-content-center h-100 w-100">
            <img src={gasco} alt="" />
          </div>
        </div>
        <div className="col-4 col-sm-3 col-md-2 p-3 d-flex justify-content-center align-items-center">
          <div className="client d-flex justify-content-center h-100 w-100">
            <img src={npc} alt="" />
          </div>
        </div>
        <div className="col-4 col-sm-3 col-md-2 p-3 d-flex justify-content-center align-items-center">
          <div className="client d-flex justify-content-center h-100 w-100">
            <img src={nrpc} alt="" />
          </div>
        </div>
        <div className="col-4 col-sm-3 col-md-2 p-3 d-flex justify-content-center align-items-center">
          <div className="client d-flex justify-content-center h-100 w-100">
            <img src={petrojet} alt="" />
          </div>
        </div>
        <div className="col-4 col-sm-3 col-md-2 p-3 d-flex justify-content-center align-items-center">
          <div className="client d-flex justify-content-center h-100 w-100">
            <img src={sumed} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
