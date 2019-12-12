import React from 'react';
import ReactDOM from "react-dom";
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Learn ReactJS To Zero From Master - by Nova</h1>

        <h2 className="BorderTop">Basic Calculator</h2>
        <Calculator />

        <h2 className="BorderTop">Click change</h2>
        <ClickChange />
      </div>
    );
  }
}

class ClickChange extends React.Component {

  constructor() {
    super();
    this.state = {
      message: "my friend (from state)!"
    };
    this.updateMessage = this.updateMessage.bind(this);
  }
  updateMessage() {
    this.setState({
      message: "my friend (from changed state)!"
    });
  }
  render() {
    return (
      <div>
        <h3>Hello {this.state.message}!</h3>
        <button onClick={this.updateMessage}>Click me!</button>
      </div>

    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { output: "" };
  }

  render() {
    let IntegerA, IntegerB, IntegerC;
    return (
      <div className="container">
        <h3>Using React -> Test DOM VITURAL</h3>
        <div>Input 1:
                  <input type="text" placeholder="Input 1" ref="input1"></input>
        </div>
        <div>Input 2 :
                  <input type="text" placeholder="Input 2" ref="input2"></input>
        </div>
        <div>
          <button id="add" onClick={() => {
            IntegerA = parseInt(ReactDOM.findDOMNode(this.refs.input1).value)
            IntegerB = parseInt(ReactDOM.findDOMNode(this.refs.input2).value)
            IntegerC = IntegerA + IntegerB
            this.setState({ output: IntegerC })
          }
          }>Add</button>
          <button id="subtract" onClick={() => {
            IntegerA = parseInt(ReactDOM.findDOMNode(this.refs.input1).value)
            IntegerB = parseInt(ReactDOM.findDOMNode(this.refs.input2).value)
            IntegerC = IntegerA - IntegerB
            this.setState({ output: IntegerC })
          }
          }>Subtract</button>
        </div>
        <div>
          <h3>Output: {this.state.output}</h3>
        </div>
      </div>
    );
  }
}

// export default App;
