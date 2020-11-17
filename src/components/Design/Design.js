import React from "react";
import Particles from "react-particles-js";
//import "./Design.css";

const particlesOptions = {
  //customize this to your liking
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const Design = (props) => (
  <div>
    <Particles className="particles" params={particlesOptions} />
    {props.children}
  </div>
);

export default Design;
