import React from "react";

let H1Styles = {
  color: "#ff0058",
  textTransform: "uppercase",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: "4rem",
};
let PStyles = {
  color: "#ffbc00",
  textTransform: "capitalize",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "justify",
  fontSize: "2rem",
};

export default function About() {
  return (
    <div className="container containerMain">
      <h1 style={H1Styles}>ABOUT ME</h1>
      <p style={PStyles}>
        Hello, My name is Drake Parker. I am a Full Stack Web Developer and I
        have created this Text Utility For Helping People around the world.
      </p>
    </div>
  );
}
