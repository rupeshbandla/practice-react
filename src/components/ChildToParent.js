import React from "react";

class ChildToParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  callbackFunction = (childData) => {
    //step:1 define a call back fn
    this.setState({ name: childData });
  };

  render() {
    return (
      <div>
        <Child parentCallback={this.callbackFunction} />
        {/* step 2: send the defined callback fn as props to child */}
        <p>{this.state.name}</p>
      </div>
    );
  }
}

class Child extends React.Component {
  sendData = () => {
    this.props.parentCallback("rupeshreddy"); //step3:send the data to parent using callback fn
  };

  render() {
    return (
      <div>
        <button className="button" onClick={() => this.sendData()}>
          SendData
        </button>
      </div>
    );
  }
}

export default ChildToParent;
