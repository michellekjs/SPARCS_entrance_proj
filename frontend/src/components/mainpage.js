import PropTypes from "prop-types";
import "./mainpage.css";
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import gear from "./assets/gear.png"
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default class MainPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };

  }
  
  render() {
    return (
        <div className="homepage">
            <text className="title">Project Mate</text>
            <text className="info">Find your project mates and register your team for the course<br/><br/> Use bulletin board to get project mates </text>
            <button className="login">Login</button>

            <div className="logbox">
              <text className ="logtitle"> Log In</text>
              <input className="id" placeholder="enter id"></input>
              <input className="pwd" placeholder="enter password"></input>
              <Link to="./signup"><button className = "signin" >Sign Up</button></Link> 
            </div>

            <img className="mainimage" src={gear}></img>
        </div>

    );
  }
}
MainPage.propTypes = {
}
MainPage.defaultProps = {
}


