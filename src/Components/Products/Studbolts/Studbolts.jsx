import React from "react";
import Products from "../Products";
import studbolts from "../../../Assets/products/studbolts.jpg";

const Studbolts = () => {
  const title = "Stud bolts, nuts & threaded bars";
  const table = {
    head: ["Material", "Specifications"],
    body: [
      [
        "Carbon Steel",
        "A193 Gr.B7-B7M- B8-B8M -B16 A194 Gr.2H-2HM-4-7-7M-8-8M",
      ],
    ],
  };
  return (
    <>
      <Products img={studbolts} title={title} table={table}>
        <p>
          El SAFA is proud of its consolidated worldwide experience in supplying
          bolting & fasteners in the energy, oil & gas, power generation.
        </p>
      </Products>
    </>
  );
};

export default Studbolts;
