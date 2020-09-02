import React, { Component } from "react";
import "./App.css";
import Counter from "../components/counter/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
      showError: false
    };
  }

  mountCounter = () => {
    this.setState({ mount: true });
  };

  unMountCounter = () => {
    this.setState({ mount: false });
  };

  ignoreProp = () => {
    this.setState({ignoreProp: Math.random()})
  }

  seedGenerator = () =>{
    this.setState({seed: Number.parseInt(Math.random()*100)});
  }

  toggleError = () =>{
    console.log(this.state.showError);
    this.setState({showError: !this.state.showError});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
        <button onClick={this.unMountCounter} disabled={!this.state.mount}>Unmount Counter</button>
        <button onClick={this.ignoreProp}>ignoreProp</button>
        <button onClick={this.seedGenerator}>Generate Seed</button>
        <button onClick={this.toggleError}>Toggle Error</button>
        {this.state.mount === true ? 
          <Counter 
            ignoreProp={this.state.ignoreProp} 
            seed={this.state.seed}
            showError={this.state.showError}/> 
          : null}
      </div>
    );
  }
}

export default App;
