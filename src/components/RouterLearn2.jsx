import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import '../style/RouterLearn.css';

export class RouterLearn2 extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <polygon points="100 0 100 10 0 10" />
                </svg>
                <div>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/contact'>contact</Link></li>
                </div>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </div>

            </BrowserRouter>
        );
    }
}
class Home extends React.Component {
    render(){
        return (
            <div>
                Home
            </div>
        );
    }
}
class About extends React.Component {
    render(){
        return (
            <div>
                About
            </div>
        );
    }
}
class Contact extends React.Component {
    render(){
        return (
            <div>
                Contact
            </div>
        );
    }
}
class NotFound extends React.Component {
    render(){
        return (
            <div>
                NotFound
            </div>
        );
    }
}