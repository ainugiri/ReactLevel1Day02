import React, { Component } from "react";

class SimpleCC extends Component {
  render() {
    return (
      <div>
        <h1>Hi Welcome {this.props.UserName} !!!</h1>
      </div>
    );
  }
}
export default SimpleCC;