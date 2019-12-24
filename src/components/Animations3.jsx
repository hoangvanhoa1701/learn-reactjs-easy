import React from 'react';
import ReactDOM from "react-dom";
import '../style/Animations2.css';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export class Animations3 extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...']
      }
      this.handleAdd = this.handleAdd.bind(this);
   };
   handleAdd(IntegerA) {
      var newItems = this.state.items.concat(IntegerA);
      this.setState({items: newItems});
   }
   handleRemove(i) {
      var newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({items: newItems});
   }
   render() {
      var items = this.state.items.map(function(item, i) {
         return (
            <div key = {item} onClick = {this.handleRemove.bind(this, i)}>
               {item}
            </div>
         );
      }.bind(this));
      let itemInput;
      return (
         <div>      
			<input type="text" placeholder="Input" ref="itemInputRef"></input>

            <button id="add" onClick={() => {
            itemInput = ReactDOM.findDOMNode(this.refs.itemInputRef).value;
            this.handleAdd(itemInput);
            this.refs.itemInputRef.value = "";
            console.log(this.refs.itemInputRef.value)
            }
            }>Add</button>

            <ReactCSSTransitionGroup transitionName = "example" 
               transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
               {items}
            </ReactCSSTransitionGroup>
         </div>
      );
   }
}