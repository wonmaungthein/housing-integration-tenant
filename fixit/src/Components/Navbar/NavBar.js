import React from "react";
import { Component } from "react";

const style = {
  background: "orange",
  height: 100
};
export class NavBar extends Component {
  render() {
    return (
      <div style={style}>
        <h1>This part is the Navigation Bar</h1>
      </div>
    );
  }
}
