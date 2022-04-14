import React from "react";
import Products from "../Products";
import studbolts from "../../../Assets/products/studbolts.jpg";
import gaskets from "../../../Assets/products/gaskets.png";

const Studbolts = () => {
  const title1 = "Stud bolts, nuts & threaded bars";
  const table1 = {
    head: ["Material", "Specifications"],
    body: [
      [
        "Carbon Steel",
        "A193 Gr.B7-B7M- B8-B8M -B16 A194 Gr.2H-2HM-4-7-7M-8-8M",
      ],
    ],
  };

  const title2 = "Gaskets";
  const table2 = {
    head: ["Material", "Specifications"],
    body: [
      [
        "Carbon Steel/Stainless Steel with Outer, Inner Ring & Winding",
        "ASME B16.2",
      ],
    ],
  };
  return (
    <>
      <Products img={studbolts} title={title1} table={table1} circle={"A"}>
        <p>
          El SAFA is proud of its consolidated worldwide experience in supplying
          bolting & fasteners in the energy, oil & gas, power generation.
        </p>
      </Products>

      <hr />

      <Products
        img={gaskets}
        title={title2}
        table={table2}
        circle={"B"}
        class={"reverse"}
      >
        <p>
          Supplier of spiral wound, ring joint gaskets and other types in all
          metal grades and construction as well as insulation kits.
        </p>
      </Products>
    </>
  );
};

export default Studbolts;
