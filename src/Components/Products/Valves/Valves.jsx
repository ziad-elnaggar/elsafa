import React from "react";
import Products from "../Products";
import SrcImg from "../../../Assets/products/valves.jpg";

const Valves = () => {
  const title = "Valves";
  const table = {
    title: [
      'Forged Steel valves: Sizes:1/2" to 2"',
      'Cast Steel Valves: Sizes:1/2" to 48"',
    ],
    head: ["Material", "Specifications"],
    body: [
      ["Casted Carbon steel", "ASTM A216-WCB, A217-WC6-C5"],
      ["Forged Carbon Steel", "ASTM A105"],
      ["Low Temperature Steel", "ASTM A351 CF8-CF8M"],
      ["Stainless Steel", "A182 F304 ,316L"],
    ],
  };
  return (
    <Products img={SrcImg} title={title} table={table}>
      <p>
        Our state of the art valve products complies with ISO 9001 and our 27
        years of excellence means that ElSAFA are the perfect solution for your
        valve requirements.
      </p>
      <p>
        Our valves come with a variety of end connections: Flanged type, as
        standard, comes with Raised Face (RF) according to ASME Class 150#, 300#
        and 600#, and with Ring-Type-Joint flanges (RTJ) for Class ratings of
        900#, 1500# and 2500#. Butt-welded ends can also be supplied according
        to customer specifications.
      </p>
      <p>
        Our scope includes Gate valve, Globe valve, Check valve, Ball
        valve, Butterfly valve, Plug valve and Safety valve in all grades.
      </p>
    </Products>
  );
};

export default Valves;
