import React from "react";
import Products from "../Products";
import SrcImg from "../../../Assets/products/flanges.jpg";

const Flanges = () => {
  const title = "Flanges";
  const table = {
    title: ['Sizes: 1/2" to 48"'],
    head: ["Flange Material", "Specifications"],
    body: [
      ["Carbon Steel", "A105"],
      ["Stainless Steel", "A182 F304/L, F310/L, F316/L"],
      ["Low Temperature Steel", "A350, LF2, LF3, LF6"],
      ["Alloy Steel", "A182 F1, F5, F9, F11, F12, F22, F91"],
      ["Duplex & Super Duplex", "A182 F51, F44, UNS S32760"],
    ],
  };
  return (
    <Products img={SrcImg} title={title} table={table}>
      <p>
        All our flanges are produced in Italy.
        <br />
        The large stock availability of flanges allows us to have fast
        deliveries. We offer high quality for competitive prices, reached
        through our efficient trading connections.
        <br />
        Our scope includes: Slip-On, Blind, Weld-neck, Socket-weld, Threaded,
        Lap Joint, Orifice, Spectacle Blinds and Long- Welded Neck.
        <br />
        Non-standard flanges are available per drawing.
      </p>
    </Products>
  );
};

export default Flanges;
