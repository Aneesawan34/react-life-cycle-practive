import React, { Component } from "react";

export default class Counter extends Component {
  componentDidMount() {
    console.log("component did mount");
  }
  UNSAFE_componentWillMount() {
    console.log("component will mount");
  }
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      ignore: this.props.ignoreProps
    };
    console.log("this.state.ignore", this.state.ignore);
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (newProps.ignoreProps !== prevState.ignore) {
      console.log(
        "newProps.ignoreProps",
        newProps.ignoreProps,
        "prevState",
        prevState
      );
      return {
        ignore: newProps.ignoreProps
      };
    }
    // else {
    //   return {
    //     ignore: this.state.ignore
    //   };
    // }
  }

  shouldComponentUpdate(newProps, newState) {
    if (newProps.ignoreProps !== this.props.ignoreProps) {
      console.log(
        "shouldComponentUpdate ---render",
        newProps.ignoreProps,
        "newState",
        newState
      );
      return true;
    } else if (newState.counter !== this.state.counter) {
      this.setState({
        counter: newState.counter
      });
      console.log(
        "newState.counter",
        newState.counter,
        "this.state.counter",
        this.state.counter
      );
      return true;
    } else {
      console.log("shouldComponentUpdate ---do not render");
      return false;
    }
  }
  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    console.log("render");

    return (
      <div>
        <h2>{this.state.counter}</h2>
        <h3>this.state.ignore: {this.state.ignore}</h3>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          button
        </button>
      </div>
    );
  }
}
