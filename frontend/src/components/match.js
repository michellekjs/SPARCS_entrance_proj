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
            <div className="classtitle" style={{fontSize:'26pt'}}>
                {this.props.location.state.classname}
            </div>
            <button className="memberbutton">
                    Add as  a member
            </button>
            <div className='block'>
                <div className="classdescription">
                    <text className="description" style={{fontSize:'14pt'}}> Class Details</text>
                    <br/>
                    {this.props.location.state.classdescrip}
                </div>
                <div className="members">
                    <text className="list" style={{fontSize:'14pt'}}> 
                    List of Members <br/>
                    {this.props.location.state.classmembers}
                    </text>
                   
                </div>
            </div>

            <div className="board">
                <text>Board</text>
                <button className="buttonboard">move to board page</button>
                <br/>
                {this.props.location.state.board}
            </div>
            <div className="matchedpairs">
                <button className="pairbutton">modal to search and pair up</button>
                {this.props.location.state.pairs}
            </div>
            
        </div>

    );
  }
}

Match.propTypes = {
}
Match.defaultProps = {
}


