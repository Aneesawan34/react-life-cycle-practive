import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { connect } from "react-redux";
// import { ApiAction } from "./Action/ApiAction";
import Counter from "./child";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mount: true,
      ignore: 0
    };
  }

  render() {
    // console.log("render");
    return (
      <div>
        <button
          disabled={this.state.mount}
          onClick={() => this.setState({ mount: true })}
        >
          Mount counter
        </button>
        <button
          disabled={!this.state.mount}
          onClick={() => this.setState({ mount: false })}
        >
          unmount counter
        </button>
        <button onClick={() => this.setState({ ignore: Math.random() })}>
          Ignore props
        </button>
        {this.state.mount ? <Counter ignoreProps={this.state.ignore} /> : null}
        {/* <h1>{this.props.myName}</h1>
        <button onClick={() => this.props.stateChange()}>
          Clicke me to change state
        </button> */}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     myName: state.name
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     stateChange: () => dispatch(ApiAction())
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
