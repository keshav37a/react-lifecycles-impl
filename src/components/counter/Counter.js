import React, { Component } from "react";

const ErrorComponent = () => {
  return <div>{this.props.nonExistantValueToTriggerError}</div>;
};

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("[Counter.js] constructor called");
    this.state = {
      counter: 0,
      seed: 0,
      showError: false
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    let currentCount = this.state.counter;
    if (currentCount > 0) this.setState({ counter: this.state.counter - 1 });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
        console.log(props);
      return {
        seed: props.seed,
        counter: props.seed,
        showError: props.showError
      };
    }
    return null;
  }

  componentDidCatch(error, info) {
    console.log("[Counter.js] componentDidCatch");
    console.log(error);
    this.setState({ error, info });
  }

  componentDidMount() {
    console.log("[Counter.js] componentDidMount");
    console.log("---------------------------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    // if(nextProps.ignoreProp && this.props.isProp !== nextProps.ignoreProp ){
    //     console.log('[Counter.js] shouldComponentUpdate - NOT RENDER');
    //     return false;
    // }
    // console.log('[Counter.js] shouldComponentUpdate - RENDER');
    return true;
  }

  // Capture some properties that are not stored in the state before we rerender that component
  getSnapshotBeforeUpdate() {

  }

  render() {
    console.log("[Counter.js] render called");

    if (this.state.error) {
      console.log(this.state.error);
      return <div>We have encountered an error {this.state.error.message}</div>;
    } else {
      return (
        <React.Fragment>
          <div>Counter: {this.state.counter}</div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          {this.state.showError ? <ErrorComponent /> : null}
        </React.Fragment>
      );
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Counter.js] componentDidUpdate ", this.state.counter);
    console.log(prevState);
    console.log(snapshot);
    console.log("-------------------------------------------------");
  }

  componentWillUnmount() {
    console.log("[Counter.js] componentWillUnmount");
  }
}

export default Counter;
