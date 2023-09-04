import React from "react";
import ReactDOM from "react-dom";

const font = {
  fontSize: "15rem"
};

font.fontSize = "3rem";

ReactDOM.render(
  <h1 style={({ color: "red" }, { margin: "60px" }, font)}>Hello World!</h1>,

  document.getElementById("root")
);
