import PropTypes from "prop-types";
import "./match.css";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

/*this page is for creating or entering rooms*/

console.log("hio");

export default class Match extends Component {
    
    constructor(props){
        super(props);
        this.state={
        }
    }

  render(){
    return (
        <div className="match" > 
            <div className="classtitle">
                CS480
            </div>
            <button className="memberbutton"> Add as member</button>
            <div className="members">
                <text> list of members of this class in this area</text>
            </div>
            <div className="matched pairs">
                <text> list of paired members of the class</text>
            </div>
            <div className="board">
                <button>move to board page</button>
                <text>board content here</text>
            </div>
            <div className="pairbutton">
                <button>modal to search and pair up</button>
            </div>
        </div>

    );
  }
}

Match.propTypes = {
}
Match.defaultProps = {
}


