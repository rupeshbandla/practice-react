import React, { Component } from "react";

class ParentToChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childmsg) {
    console.log(`Hello ${this.state.message} to ${childmsg}`);
  }

  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent} />
      </div>
    );
  }
}

function Child(props) {
  return (
    <button onClick={() => props.greetHandler("child component")}>
      GreetParent
    </button>
  );
}

export default ParentToChild;
