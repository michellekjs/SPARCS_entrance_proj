import PropTypes from "prop-types";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import "./newroom.css"

console.log("new room page");

export default class NewRoom extends Component {
    
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleExplain = this.handleExplain.bind(this);
        this.handleMax = this.handleMax.bind(this);
        this.handleRoomname = this.handleRoomname.bind(this);

        this.state={
            roomname:"",
            explain:"",
            max:"",
            members:"",
            classname:""
        }
    }


    onSubmit(e) {
        this.state.classname=this.props.location.state;

        console.log(this.props.location.state)
        e.preventDefault();
        console.log("submit successful");

        //establisher
       var token = localStorage.getItem("token");
        var decoded = jwt_decode(token);
      console.log(decoded.id);

        const newRoom= {
            establisher:decoded.id,
            roomname: this.state.roomname, 
            explain: this.state.explain,
            max:this.state.max,
            members:[decoded.id]
        };


    axios.post('http://localhost:4000/team/newroom/'+this.props.location.state, newRoom )
    console.log(this.props.location.state);

        this.setState({
            roomname:"",
            explain:"",
            max:"",
            members:"",
            classname:""
        })
    
    }

    handleRoomname=e=>{
        e.preventDefault();
        this.setState({roomname:e.target.value})
    }
    handleExplain=e=>{
        e.preventDefault();
        this.setState({explain:e.target.value})
    }
    handleMax=e=>{
        e.preventDefault();
        this.setState({max:e.target.value})
    }

    
//반 이름

  render(){
    return (
        <div className="newroompage" > 
        <text className="text"> Make a new room!</text>
        <form onSubmit={this.onSubmit}>
            <input className="roomname" placeholder="roomname" value={this.state.roomname} onChange={this.handleRoomname}></input>
            <input className="explain" placeholder="explain" value={this.state.explain} onChange={this.handleExplain}></input>
            <input className="max" placeholder="max members" value={this.state.max} onChange={this.handleMax}></input>
            <button className="button" type="submit">Create</button>
        </form>
        </div>

    );
  }
}

NewRoom.propTypes = {
}
NewRoom.defaultProps = {
}


