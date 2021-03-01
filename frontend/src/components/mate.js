import PropTypes from "prop-types";
import "./mate.css";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import jwt_decode from "jwt-decode";

export default class Mate extends Component {
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
        this.state={
            classname:"",
            members:""
        }
    }

    componentDidMount(){
        this.state.classname=this.props.location.state.classname;
        console.log(this.props.location.state);


        if ( 'token' in localStorage){
            console.log("hi")
        }
        else{
            console.log("how dare you")
            this.props.history.push({pathname:'/'})
        }
    }
    
    componentDidUpdate(){
        window.location.replace('/mate')
    }

    handleClick = e =>{
        e.preventDefault();
        this.props.history.push({pathname:'/newroom', state:this.state.classname})

    }



    handleJoin(p){
        var token = localStorage.getItem("token");
        var decoded = jwt_decode(token);
        axios.get("http://localhost:8080/team/newmember/"+p+"/"+decoded.id+"/"+this.state.classname)
        .then(function(res){
            console.log(res.data.room);
        })
        this.props.history.push({pathname:"/match", state:this.props.location.state})
        window.history.go(-2);
    }

  render(){
    return (
        <div className="matepage" > 
                <text className="title" >
                    {this.props.location.state.classname}
                </text>
                    <text className="content">
                        {this.props.location.state.room.map(room=> 
                            <div className="matebutton" style={{'marginBottom':'20px', 'width':'1020px','height':"200px"}}>
                                <text className="matetitle">Team name : {room.roomname}</text><br/>
                                <text  className="matecontent">Team maker : {room.establisher}</text><br/>
                                <text className="matewriter">Maximum members : {room.max}</text><br/>
                                <text className="currentmembers">Current Members : {room. members}</text>
                                <button className="joinbutton" onClick={() => this.handleJoin(room.roomname)}><Link to="/match"></Link>Join this team</button> 
                                <br/>
                            </div>)}
                    </text>
               <button className="newbutton" onClick={this.handleClick}>+Add</button>
        </div>
    );
  }
}

Mate.propTypes = {
}
Mate.defaultProps = {
}
