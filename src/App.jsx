import React from 'react';
import ReactDOM from "react-dom";
import {ChangeBackgroundEx} from './components/ChangeBackgroundEx';
import {ForceUpdate} from './components/ForceUpdate';
import {FindDomNode} from './components/FindDomNode';
import {ComponentLifeCycle2} from './components/ComponentLifeCycle2';
import {FormsSimpleExample} from './components/FormsSimpleExample';
import {FormsComplexExample} from './components/FormsComplexExample';
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

        <h2 className="BorderTop">Click Change Image</h2>
        <ClickChange2 />

        <h2 className="BorderTop">State and Props Example</h2>
        <StatefulExample />

        <h2 className="BorderTop">Set State</h2>
        <SetState/>

        <h2 className="BorderTop">Change Backgroud</h2>
        <ChangeBackgroud/>

        <h2 className="BorderTop">Change Backgroud Export</h2>
        <ChangeBackgroundEx/>

        <h2 className="BorderTop">Force Update</h2>
        <ForceUpdate/>

        <h2 className="BorderTop">Find Dom Node</h2>
        <FindDomNode/>

        <h2 className="BorderTop">Component Life Cycle</h2>
        <ComponentLifeCycle2/>

        <h2 className="BorderTop">Forms Simple Example</h2>
        <FormsSimpleExample/>

        <h2 className="BorderTop">Forms Complex Example</h2>
        <FormsComplexExample/>

        <h2 className="BorderTop">Forms Simple Example</h2>
        <FormsSimpleExample/>
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
class ClickChange2 extends React.Component {

  constructor() {
    super();
    this.state = {
      message: require('./img/test.jpg')
    };
    this.updateMessage = this.updateMessage.bind(this);
  }
  updateMessage() {
    this.setState({
      message: require('./img/test2.jpg')
    });
  }
  render() {
    return (
      <div>
        <h3>Hello {this.state.message}!</h3>
        <img src={this.state.message} alt="" className="img-400-400"/>
        <button onClick={this.updateMessage}>Show!</button>
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

class SetState extends React.Component {
  constructor() {
     super();
   
     this.state = {
        data: []
     }
 
     this.setStateHandler = this.setStateHandler.bind(this);
  };
  setStateHandler() {
     var item = "setState..."
     var myArray = this.state.data.slice();
   myArray.push(item);
     this.setState({data: myArray})
  };
  render() {
     return (
        <div>
           <button onClick = {this.setStateHandler}>SET STATE</button>
           <h4>State Array: {this.state.data}</h4>
        </div>
     );
  }
}

const green = '#39D1B4';
const yellow = '#FFD712';

class ChangeBackgroud extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
    const newColor = this.state.color === green ? yellow : green;
    this.setState({ color: newColor });
  }
  
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h3>
          Change my color
        </h3>
        <button onClick={this.changeColor}>
  				Change color
				</button>
      </div>
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
