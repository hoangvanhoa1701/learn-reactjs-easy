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

        <h2 className="BorderTop">Click Change</h2>
        <ClickChange />

        <h2 className="BorderTop">State and Props Example</h2>
        <StatefulExample />

        {/* <h2 className="BorderTop">Props Validation</h2>
        <PropsValidation /> */}
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

class StatefulExample extends React.Component {
  constructor() {
    super();
    this.state = {
      data:
        [
          {
            "id": 1,
            "name": "Foo",
            "age": "20"
          },
          {
            "id": 2,
            "name": "Bar",
            "age": "30"
          },
          {
            "id": 3,
            "name": "Baz",
            "age": "40"
          }
        ]
    }
  }
  render() {
    return (
      <div>
        <HeaderStatefulExample />
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow personProp={person} key={i}></TableRow>)}
          </tbody>
        </table>
      </div>
    );
  }
}

class HeaderStatefulExample extends React.Component {
  render() {
    return (
      <div>
        <h3>Stateful Header</h3>
      </div>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.personProp.id}</td>
        <td>{this.props.personProp.name}</td>
        <td>{this.props.personProp.age}</td>
      </tr>
    );
  }
}

// class PropsValidation extends React.Component {
//   render() {
//      return (
//         <div>
//            <h3>Array: {this.props.propArray}</h3>
//            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
//            <h3>Func: {this.props.propFunc(3)}</h3>
//            <h3>Number: {this.props.propNumber}</h3>
//            <h3>String: {this.props.propString}</h3>
//            <h3>Object: {this.props.propObject.objectName1}</h3>
//            <h3>Object: {this.props.propObject.objectName2}</h3>
//            <h3>Object: {this.props.propObject.objectName3}</h3>
//         </div>
//      );
//   }
// }

// PropsValidation.propTypes = {
//   propArray: React.PropTypes.array.isRequired,
//   propBool: React.PropTypes.bool.isRequired,
//   propFunc: React.PropTypes.func,
//   propNumber: React.PropTypes.number,
//   propString: React.PropTypes.string,
//   propObject: React.PropTypes.object
// }

// PropsValidation.defaultProps = {
//   propArray: [1,2,3,4,5],
//   propBool: true,
//   propFunc: function(e){return e},
//   propNumber: 1,
//   propString: "String value...",
  
//   propObject: {
//      objectName1:"objectValue1",
//      objectName2: "objectValue2",
//      objectName3: "objectValue3"
//   }
// }

// export default App;
