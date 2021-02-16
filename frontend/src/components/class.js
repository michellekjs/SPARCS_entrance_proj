import PropTypes from "prop-types";
import "./class.css";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


export default class ClassPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

  render(){
    return (
        <div>
            <div className="searchclass"> 
                <text>Enter Room</text>
                <input placeholder="class code"></input>
                <button> Search </button>
            </div>

            <div classname="makeclass">
                <text>Create Room</text>
                <input placeholder="class name"></input>
                <input placeholder="password"></input>
                <input placeholder="short description"></input>
                <button> Make Class </button>
            </div>
        </div>
    );
  }
}

ClassPage.propTypes = {
}
ClassPage.defaultProps = {
}


