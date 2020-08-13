import React, { Component } from "react";
import Clock from "react-live-clock";
import { Switch } from "antd";
import moment from "moment";
import "./Clock.css";

class clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todaysDate: false,
    };
  }

  toggleSwitch = () => {
    this.setState({
      todaysDate: !this.state.todaysDate,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="navbar">
        <label> Digital Clock</label>    
       
        <br></br>
        
          <Switch onClick={this.toggleSwitch} className="toggle"  />
        </div>
        
        <Clock
          className="time" id="time"
          format={"h:mm:ss A"}
          ticking={true}
          timezone={"live"} 
        />

        <div className="toggledate">
          {this.state.todaysDate ? moment().format(" MMMM Do YYYY") : ""}
        </div>
      </div>
    );
  }
}

export default clock;

