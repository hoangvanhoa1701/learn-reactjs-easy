import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
 
import '../style/RouterLearn.css';
 
export class RouterLearn extends React.Component {
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
 
          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
 
}
 
class Home extends React.Component {
 
  render()  {
    return (
      <div>
        <h3>Home</h3>
      </div>
    );
  }
}
 
class About  extends React.Component {
  render() {
    return (
      <div>
        <h3>About</h3>
      </div>
    );
  }
}

class Notfound  extends React.Component {
   render() {
     return (
       <div>
         <h3>Not found</h3>
       </div>
     );
   }
 }

class Topics extends React.Component {
  render( ) {
    return (
      <div>
        <h3>Topics</h3>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
 
        <div className="secondary-route-place">
          <Route
            path={`${this.props.match.url}/:topicId`}
            component={Topic} />
          <Route
            exact
            path={this.props.match.url}
            render={() =>
              <h4>
                Please select a topic.
              </h4>
            }
            />
        </div>
      </div>
    );
  }
}
 
class Topic extends React.Component {
  render()  {
    return (
      <div>
        <h3>
          {this.props.match.params.topicId}
        </h3>
      </div>
    );
  }
}