import React from "react";
import Products from "../Products";
import plates from "../../../Assets/products/plates.jpg";
import heads from "../../../Assets/products/heads.jpg";

const Plates = () => {
  const title1 = "Plates";
  const table1 = {
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

  const title2 = "Heads";
  const table2 = {
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
      <Products img={plates} title={title1} table={table1} circle={"A"}>
        <p>
          Thanks to its worldwide web of manufacturers, ElSAFA distributes an
          extensive selection of High-quality and certified Plates & Heads which
          have been delivered to several clients throughout our history.
        </p>
      </Products>

      <hr />

      <Products
        img={heads}
        title={title2}
        table={table2}
        circle={"B"}
        class={"reverse"}
      >
        <p>
          Our scope includes: Ellipsoidal, Elliptical, Dished, Flat Heads. Other
          Shapes available per drawing.
        </p>
      </Products>
    </>
  );
};

export default Plates;
