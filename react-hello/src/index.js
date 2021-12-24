import React from "react";
import ReactDOM from "react-dom";

function ReactHello() {
  return (
    <div>
      <Hello/> <World/>
    </div>
  );
}

function Hello(){
  return (
    <span>Hello</span>
  )
}
function World(){
  return (
    <span>World</span>
  )
}

ReactDOM.render(ReactHello(), document.querySelector("#root"));
