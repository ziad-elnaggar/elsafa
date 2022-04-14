import React from "react";
import Products from "../Products";
import SrcImgA from "../../../Assets/products/pipes-a.jpg";
import SrcImgB from "../../../Assets/products/pipes-b.jpg";
import SrcImgC from "../../../Assets/products/pipes-c.jpg";

const Pipes = () => {
  const title1 = "Seamless & Welded Pipes";
  const table1 = {
    title: ['Sizes: 1/2" to 48"'],
    head: ["Material", "Specifications"],
    body: [
      ["Carbon Steel", "ASTM A106 Gr. B / ASTM A53 Gr.B"],
      ["High Yield", "API 5L Gr.B, X42 , X52 ,X56"],
      ["Stainless Steel", "ASTM A312 TP304/L, 316/L"],
      ["Alloy Steel", "A335 P1, P5, P9, P11, P12, P22, P9"],
    ],
  };

  const title2 = "Heat exchanger tubes";
  const table2 = {
    head: ["Tube Material", "Specifications"],
    body: [
      ["Carbon Steel", "ASTM A179 ,A192, A210"],
      ["Stainless Steel", "ASTM A249 TP304, 304L, 316, 316L"],
      ["Alloy Steel", "ASTM A213 Gr. T2 , T5 , T11 , T12 & T22"],
      ["Duplex & Super Duplex", "ASTM B111 UNS C68700-C70600-C71500"],
    ],
  };

  const title3 = "Finned Tubes";
  const table3 = {
    head: ["Tube Material", "Specifications"],
    body: [
      ["Carbon Steel", "A179, A192, A210,A334"],
      ["Stainless Steel", "A213TP304,TP316,A789"],
      ["Carbon Alloy", "A213"],
      ["Copper Alloy", "C70600, C71500, C44300, C68700"],
    ],
  };
  const table3_2 = {
    head: ["Fin Material", "Specifications"],
    body: [
      ["Aluminum", "A1050,A1060, A1100"],
      ["Copper", "C1220, ASTM B221 A1050, A1060, A1100"],
    ],
  };
  return (
    <>
      <Products img={SrcImgA} title={title1} table={table1} circle={"A"}>
        <p>
          Over 27 years supplying special alloy and steel pipes to the entire
          Egyptian Industry, in accordance with ASME,ASTM standards, EL SAFA has
          extensive experience in this field.
        </p>
        <p>
          The different chemical and physical properties of various grades of
          steel pipes allow for a broad range of service usage.
        </p>
      </Products>

      <hr />

      <Products
        img={SrcImgB}
        title={title2}
        table={table2}
        circle={"B"}
        class={"reverse"}
      >
        <p>
          Heat exchanger tubes are used for cooling, heating or re-heating of
          gases or fluids in a wide range of industries like petro-chemical,
          power generation, pharmaceutical and nuclear industry.
        </p>
        <p>
          Thanks to its International Supply Chain, we can supply our heat
          exchanger tubes with quick delivery and cost-effective rates.
        </p>
      </Products>

      <hr />

      <Products
        img={SrcImgC}
        title={title3}
        table={table3}
        table2={table3_2}
        circle={"C"}
      >
        <p>
          In the field of finned tube, El SAFA offers a wide range of products
          capable of satisfying any requirement in machinery and plant
          engineering.
        </p>
        <p>
          The high level of customer loyalty confirms that this line of products
          satisfies every need and level of quality, recognized by the vast
          number of jobs we have delivered over the years.
        </p>
        <p>
          Our scope includes: High frequency electric resistance welded
          Finned-tube,Extruded fin tube,L/LL/KL type fin tube,low fin tube.
        </p>
      </Products>
    </>
  );
};

export default Pipes;
