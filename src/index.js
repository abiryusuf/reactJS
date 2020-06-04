import React from "react";
import ReactDOM from "react-dom";

const fName = "abir";
const lName = "yusuf";

ReactDOM.render(
  <div>
    <p>My name is {fName + " " + lName}</p>
    <h1>Drinks</h1>
    <ul>
      <li>Pepsi</li>
      <li>cocola</li>
      <li>fanta</li>
    </ul>
    <p>MY lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
