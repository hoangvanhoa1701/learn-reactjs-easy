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
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link to='/contact'>contact</Link></li>
                    </ul>
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
                <h3>Contact</h3>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/Rendering`}>Rendering</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/Attribute`}>Attribute</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/Custom`}>Custom</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/Item`}>Item</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/Important`}>Important</Link>
                    </li>

                    <br/>

                    <div>
                        <Route exact path={this.props.match.url} 
                        render={() =>
                            <div>
                                Please select a topic you like!
                            </div>
                        }></Route>
                        <Route path={`${this.props.match.url}/:topicId`} component={TopicX}></Route>
                    </div>
                </ul>
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
class TopicX extends React.Component {
    render(){
        return (
            <div>
                {this.props.match.params.topicId}
            </div>
        );
    }
}