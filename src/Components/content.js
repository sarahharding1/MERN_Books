import React, { Component } from "react";

//Import component from react js
class Content extends Component {
  render() {
    return (
      <div>
        <h1> Hello World</h1>
        <h1>This is my Books project</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
//shows this class is designed to be used somewhere else
export default Content;
