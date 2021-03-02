import PropTypes from "prop-types";
import "./newboard.css";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import jwt_decode from "jwt-decode";

console.log("new board page");

export default class NewBoard extends Component {
    
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleBoardtitle = this.handleBoardtitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.state={
            writer:"",
            boardtitle:"",
            content:"",
            classname:""
        }
    }


    onSubmit(e) {
        this.state.classname=this.props.location.state.classname;
        console.log(this.state.classname)
        e.preventDefault();
        console.log("submit successful");

       var token = localStorage.getItem("token");
        var decoded = jwt_decode(token);
      console.log(decoded.id);

        const newBoard= {
            writer:decoded.id,
            boardtitle:this.state.boardtitle,
            content: this.state.content
        };


    axios.post('http://localhost:8080/team/newboard/'+this.state.classname, newBoard )
    console.log(this.state.classname);

        this.setState({
            writer:"",
            boardtitle:"",
            content:""
        })
        this.props.history.push({pathname:"/match", state:this.props.location.state})

    }

    handleBoardtitle = e => {
        e.preventDefault();
        this.setState({
            boardtitle:e.target.value
        })
    }
    handleContent = e =>{
        e.preventDefault();
        this.setState({
            content : e.target.value
        })

    }
    
//반 이름

  render(){
    return (
        <div className="newboardpage" > 
        <text className="content2">Add new content</text>
        <form onSubmit={this.onSubmit}>
            <input className="title" placeholder="title" value={this.state.boardtitle} onChange={this.handleBoardtitle}></input>
            <input className="content" placeholder="content" value={this.state.content} onChange={this.handleContent}></input>
            <button className="save" type="submit">Save</button>
        </form>
        </div>

    );
  }
}

NewBoard.propTypes = {
}
NewBoard.defaultProps = {
}


