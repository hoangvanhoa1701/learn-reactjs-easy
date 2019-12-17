import React, {Component} from 'react';

const green = '#39D1B4';
const yellow = '#FFD712';

export class ChangeBackgroundEx extends Component {
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
          Change my color export
        </h3>
        <button onClick={this.changeColor}>
  				Change color
				</button>
      </div>
    );
  }
}