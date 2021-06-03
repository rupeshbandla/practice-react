import React from "react";

class UpdatingPhase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  // static getDerivedStateFromProps(props) {
  //   return { color: props.color };
  // }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  // shouldComponentUpdate() {
  //   return true;
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   document.getElementById("mydiv").innerHTML =
  //     "Before the update, the color was " + prevState.color;
  // }
  componentDidUpdate() {
    //called after the update has been rendered in the DOM
    document.getElementById("div").innerHTML =
      "The updated color is " + this.state.color;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.color}</h1>
        <div id="mydiv"></div>
        <div id="div"></div>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default UpdatingPhase;
