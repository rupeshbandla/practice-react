import React from "react";

class MountAndUpdatePhase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "yellow" });
    }, 1000);
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.color;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.color}</h1>
        <div id="mydiv"></div>
      </div>
    );
  }
}

export default MountAndUpdatePhase;
