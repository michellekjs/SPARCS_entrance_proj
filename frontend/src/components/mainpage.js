import PropTypes from "prop-types";
import "./mainpage.css";
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import gear from "./assets/gear.png"
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";

import axios from "axios";

export default class MainPage extends Component {
  constructor(props) {
      super(props);
      this.handleID=this.handleID.bind(this);
      this.handlePWD=this.handlePWD.bind(this);
      this.state = {
        id:"",
        pwd:""
      };
  }
componentDidMount(){
  localStorage.clear()
}
onSubmit = e =>{

  e.preventDefault();

  console.log(this.state.id);
  const UserLogin = {
    id:this.state.id,
    pwd:this.state.pwd
  };

  axios.post('http://localhost:8080/myFirstDatabase/login',UserLogin)
  .then(res=>{
    if (res.data=="fail"){
      console.log('try again');
      alert("Try Again. No user data");
    }
    else{
      console.log(res.data)
      console.log(res.data.token)
      var token = res.data.token;

      var decoded = jwt_decode(token);
      console.log(decoded);

      localStorage.setItem("token",res.data.token);

      if (decoded.id == "admin"){
        this.props.history.push({pathname:'/admin'})
      }
      else{
        this.props.history.push({pathname:'/classpage'})
      }
      
    }
})

  this.setState({
    id:"",
    pwd:""
  })
}

handleID = e => {
  e.preventDefault();
  this.setState({
      id:e.target.value
  });
}

handlePWD = e =>{
  e.preventDefault();
  this.setState({
      pwd:e.target.value
  })
}


  
  render() {
    return (
        <div className="homepage">
            <text className="title">Project Mate</text>
            <text className="info">Find your project mates and register your team for the course<br/><br/> Use bulletin board to get project mates </text>
            <Link to="./signup"><button className = "signin" >Sign Up</button></Link> 
            

            <div className="logbox">
              <form onSubmit = {this.onSubmit}>
                <text className ="logtitle"> Log In</text>
                <input className="id" value={this.state.id} onChange={this.handleID} placeholder="enter id"></input>
                <input className="pwd" value={this.state.pwd} onChange={this.handlePWD} placeholder="enter password"></input>
                <button className="login" type='submit'>Login</button>
              </form>
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


