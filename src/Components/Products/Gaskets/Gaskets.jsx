import React from "react";
import Products from "../Products";
import gaskets from "../../../Assets/products/gaskets.png";

const Gaskets = () => {
  const title = "Gaskets";
  const table = {
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
      <Products img={gaskets} title={title} table={table}>
        <p>
          Supplier of spiral wound, ring joint gaskets and other types in all
          metal grades and construction as well as insulation kits.
        </p>
      </Products>
    </>
  );
};

export default Gaskets;
