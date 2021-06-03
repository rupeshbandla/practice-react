import React from "react";

class MountingState extends React.Component {
  constructor(props) { //called 1st when the component initilized
    super(props); //1st stmt should be super with props in class component
    this.state = { color: "white" };
  }
  componentDidMount() {
    //called when the component is rendered
    setTimeout(() => {
      this.setState({ color: "yellow" });
    }, 1000);
  }
  render() {
    //it will outputs the html to dom
    return <h1>My Favorite Color is {this.state.color}</h1>;
  }
}

export default MountingState;
