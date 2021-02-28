import PropTypes from "prop-types";
import "./match.css";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {BrouserRouter as Router,Route,Link} from "react-router-dom"
import jwt_decode from "jwt-decode";

/*this page is for creating or entering rooms*/

console.log("hio");



export default class Match extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            classname:""
        }
    }

componentDidMount(){
    this.state.classname=this.props.location.state;
        if ( 'token' in localStorage){
            console.log("hi")
        }
        else{
            console.log("how dare you")
            this.props.history.push({pathname:'/'})
        }
}

handleMemberClick = e =>{
  var token= localStorage.getItem('token')
  console.log(token);
    }
    //add as a member using token information


handleClick=e=> {
    var that = this;
    this.props.history.push({pathname:'/boardpage',state:this.state.classname})
}


  render(){
    return (
        <div className="match" > 
            <div className="classtitle" style={{fontSize:'26pt'}}>
                {this.props.location.state.classname}
            </div>
            <button className="memberbutton" onClick={this.handleMemberClick}>
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
                <text className="boardtitle">Board</text>
                
                <button className="buttonboard" onClick={this.handleClick}>  
                move board page
                </button>
                <br/>
                
                {this.props.location.state.board.slice(0,5).map(board=> 
                <div>
                    <br/>
                    <div className='contenttitle'>{board.boardtitle}</div>
                    <div className='contentwriter' >{board.writer}</div>
                    <br/>
                </div>)
                }
                
            </div>
            
        </div>

    );
  }
}

Match.propTypes = {
}
Match.defaultProps = {
}


