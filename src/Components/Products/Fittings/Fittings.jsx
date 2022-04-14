import React from "react";
import Products from "../Products";
import SrcImg1 from "../../../Assets/products/fittings-a.jpg";
import SrcImg2 from "../../../Assets/products/fittings-b.jpg";

const Fittings = () => {
  const title1 = "Butt-weld";
  const table1 = {
    title: ['Sizes: 1/2" to 60"'],
    head: ["Fitting Material", "Specifications"],
    body: [
      ["Stainless Steel", "A403WP 304/L, 316/L"],
      ["Carbon Steel", "A234 WPB, WPC"],
      ["Low Temperature Steel", "A420 WPL6, WPL3"],
      ["Alloy Steel", "A234 WP1, WP5, WP9, WP11, WP12, WP22, WP91"],
    ],
  };

  const title2 = "Forged";
  const table2 = {
    title: ['Sizes:1/2" to 4"'],
    head: ["Fitting Material", "Specifications"],
    body: [
      ["Carbon Steel", "A105"],
      ["Stainless Steel", "A182, F304/L F316/L"],
      ["Low Temperature Steel", "A350, LF2, LF3"],
      ["Alloy Steel", "A182 F1, F5, F9, F11, F12, F22, F91"],
    ],
  };
  return (
    <>
      <Products img={SrcImg1} title={title1} table={table1} circle={"A"}>
        <p>El SAFA is a one-stop-shop for all of your piping supply needs.</p>
        <p>
          We carry not only one of the Egyptian largest inventories of pipe and
          tube, we supply all the matching fittings and flanges for any
          application.
        </p>
        <p>
          Our main fittings scope includes Elbows, Tees, Reducers, Caps, Bends,
          Crosses.
        </p>
      </Products>

      <hr />

      <Products
        img={SrcImg2}
        title={title2}
        table={table2}
        circle={"B"}
        class={"reverse"}
      >
        <p>
          Our large inventory of forged steel fittings is a guarantee of prime
          service to all our customers.
        </p>
        <p>
          Our main fittings scope includes Elbows,Tees,
          Reducers,Caps,Unions,Plugs,Bushes,Couplings, Bends,Crosses.
        </p>
      </Products>
    </>
  );
};

export default Fittings;
