import React from "react";
import Products from "../Products";
import heads from "../../../Assets/products/heads.jpg";

const Heads = () => {
  const title = "Heads";
  const table = {
    title: ['Sizes: 1/2" to 48"'],
    head: ["Head Material", "Specifications"],
    body: [
      ["Carbon Steel", "ASTM A515 Gr.60, 70 / A516 Gr.60, 70"],
      [
        "Stainless Steel",
        "ASTM A240 TP304, 304L, 304 H , 316 , 316L , 321, 321H, 409, 410S , 430",
      ],
      ["Alloy Steel", "ASTM A387 Gr.,5,9,11,22 & 90"],
      ["Duplex", "ASTM A240 Gr. UNS S31803, S32205"],
    ],
  };
  return (
    <>
      <Products img={heads} title={title} table={table}>
        <p>
          Our scope includes: Ellipsoidal, Elliptical, Dished, Flat Heads. Other
          Shapes available per drawing.
        </p>
      </Products>
    </>
  );
};

export default Heads;
