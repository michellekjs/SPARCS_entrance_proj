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
            classname:"",
            classmembers:[],
            
        }
    }

componentDidMount(){
    this.state.classname=this.props.location.state.classname;
    console.log(this.props.location.state)
        if ( 'token' in localStorage){
            console.log("hi")

        }
        else{
            console.log("how dare you")
            this.props.history.push({pathname:'/'})
        }
}


    
    //add as a member using token information


handleClick=e=> {
    var that = this;
    this.props.history.push({pathname:'/boardpage',state:this.props.location.state})
}

handleClick2=e=> {
    var that = this;
    this.props.history.push({pathname:'/mate',state:this.props.location.state})
    console.log("?")
    console.log(this.state.classname);
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
                    <br/>
                    {this.state.classmembers}
                    </text>
                   
                </div>
            </div>

            <div className="board">
                <text className="boardtitle">Board</text>
                
                <button className="buttonboard" onClick={this.handleClick}>  
                + more
                </button>
                <br/>
                
                {this.props.location.state.board.slice(0,5).map(board=> 
                <div>
                    <br/>
                    <text className='contenttitle'>{board.boardtitle}</text>
                    <text className='contentwriter' >{board.writer}</text>
                    <br/>
                </div>)
                }
                
            </div>


            <div className="mate">
                <text className="matetitle">Project Mate</text>
                <button className="buttonmate" onClick={this.handleClick2}>  
                + more
                </button>
                <br/>
                {this.props.location.state.room.slice(0,5).map(room=> 
                <div>
                    <br/>
                    <text className='roomtitle'>{room.roomname}</text>
                    <text className="roommaker">{room.establisher}</text>
                </div>
                )}
            </div>
            
        </div>

    );
  }
}

Match.propTypes = {
}
Match.defaultProps = {
}


