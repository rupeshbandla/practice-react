import React from "react";

const Hello = ({ message }) => <h1>Hello {message} </h1>;

function HOC(WrappedComponent) {
  // Take a component as argument WrappedComponent
  return class extends React.Component {
    //create an anonymous component
    // componentDidUpdate(prevProps) {
    //   console.log("Current props: ", this.props.message);
    //   console.log("Previous props: ", prevProps);
    // }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

const NewComponent = HOC(Hello);

export default NewComponent;
