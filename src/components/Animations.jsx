import React from 'react';
import '../style/Animations.css';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export class Animations extends React.Component {
   render() {
      return (
         <div>
            <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {1000}
               transitionEnter = {false} transitionLeave = {false}>
					
               <h3>My Element...</h3>
            </ReactCSSTransitionGroup>
         </div>      
      );
   }
}