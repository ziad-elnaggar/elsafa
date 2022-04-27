import React from "react";
import Products from "../Products";
import plates from "../../../Assets/products/plates.jpg";

const Plates = () => {
  const title = "Plates";
  const table = {
    title: ['Sizes: 1/2" to 48"'],
    head: ["Plate Material", "Specifications"],
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
      <Products img={plates} title={title} table={table}>
        <p>
          Thanks to its worldwide web of manufacturers, ElSAFA distributes an
          extensive selection of High-quality and certified Plates & Heads which
          have been delivered to several clients throughout our history.
        </p>
      </Products>
    </>
  );
};

export default Plates;
