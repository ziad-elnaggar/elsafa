import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import { scrollBtn } from "../../App";

const Home = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      let sliderId = document
        .querySelector('input[name="slider"]:checked')
        .getAttribute("id");
      let checkboxNum = sliderId.split("-")[1];
      if(checkboxNum === "6"){
          checkboxNum = 0
          document.getElementsByClassName("checkbox")[checkboxNum].checked = true;
      } else {
        document.getElementsByClassName("checkbox")[checkboxNum-1].checked = false;
        document.getElementsByClassName("checkbox")[checkboxNum].checked = true;
      }
    }, 3500);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
  return (
    <div className="home container my-4">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-3 bold">
        <h4 className="text-center my-3 p-3">
          “SERVICE IS OUR NUMBER ONE STOCKING ITEM”
        </h4>
        </div>
        <div className="col-lg-10 col-xl-8 align-self-center">
          <div className="section mx-auto text-center slider-height-padding">
            <input
              className="checkbox first"
              type="radio"
              id="slide-1"
              name="slider"
              defaultChecked
            />
            <label htmlFor="slide-1"></label>

            <input
              className="checkbox second"
              type="radio"
              name="slider"
              id="slider-2"
            />
            <label htmlFor="slider-2"></label>

            <input
              className="checkbox third"
              type="radio"
              name="slider"
              id="slider-3"
            />
            <label htmlFor="slider-3"></label>

            <input
              className="checkbox forth"
              type="radio"
              name="slider"
              id="slider-4"
            />
            <label htmlFor="slider-4"></label>

            <input
              className="checkbox fifth"
              type="radio"
              name="slider"
              id="slider-5"
            />
            <label htmlFor="slider-5"></label>

            <input
              className="checkbox sixth"
              type="radio"
              name="slider"
              id="slider-6"
            />
            <label htmlFor="slider-6"></label>

            <ul className="slider">
              <NavLink onClick={scrollBtn} to="/products/pipes">
                <li>
                  <p>Pipes</p>
                </li>
              </NavLink>
              <NavLink onClick={scrollBtn} to="/products/flanges">
                <li>
                  <p>Flanges</p>
                </li>
              </NavLink>
              <NavLink onClick={scrollBtn} to="/products/valves">
                <li>
                  <p>Valves</p>
                </li>
              </NavLink>
              <NavLink onClick={scrollBtn} to="/products/fittings">
                <li>
                  <p>Pipe fittings</p>
                </li>
              </NavLink>
              <NavLink onClick={scrollBtn} to="/products/plates">
                <li>
                  <p>Plates & Heads</p>
                </li>
              </NavLink>
              <NavLink onClick={scrollBtn} to="/products/studbolts">
                <li>
                  <p>Studbolts & Gaskets</p>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
