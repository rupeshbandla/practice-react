import React from "react";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "rupesh"//step 1:create state with an object
    };
  }

  render() {
    return (
      <div>
        <Child dataParentToChild={this.state.name} />
        {/* step 2:sending data through props from parent to child */}
      </div>
    );
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.dataParentToChild, //step3:setting parent data in child state using props
    };
  }

  render() {
    const { name } = this.state;
    return <div>{name}</div>; //step4:binding the updated state value
  }
}

export default Parent;
