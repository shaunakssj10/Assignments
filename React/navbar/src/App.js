import './App.css';
import Route from 'react-router-dom/Route';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <ul>
        
        <li> <NavLink to="/home" activeClassName="selected" className="main">Home</NavLink></li>
          <li><NavLink to="/projects" exact activeClassName="selected" className="main">Projects</NavLink></li>
          <li><NavLink to="/services" exact activeClassName="selected" className="main">Services</NavLink></li>
          <li><NavLink to="/contact" exact activeClassName="selected" className="main">Contact</NavLink></li>
            </ul>
            <br></br>
        <Route path="/home" render={
          () =>{
            return (<div>
              <h1>You Chose <b className="display"> Home </b></h1></div>
            )
          }
        }
        />

       <Route path="/projects" render={
          () =>{
            return (
              <h1>You Chose <b className="display"> Projects </b></h1>
            )
          }
        }
        />

        <Route path="/services" render={
          () =>{
            return (
              <h1>You Chose <b className="display"> Services </b></h1>
            )
          }
        }
        />

        <Route path="/contact" render={
          () =>{
            return (
              <h1>You Chose <b className="display"> Contact </b></h1>
            )
          }
        }
        />
        </div>
        </Router>
      
    );
  }
}

export default App;
