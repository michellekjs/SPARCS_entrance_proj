import PropTypes from "prop-types";
import "./signup.css";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import project from "./assets/projectimage.jpg"

console.log("hio");
export default class SignUp extends Component {
    
    constructor(props){
        super(props);
        this.handleName = this.handleName.bind(this);
        this.handleID = this.handleID.bind(this);
        this.handlePWD = this.handlePWD.bind(this);
        this.handlePWD2 = this.handlePWD2.bind(this);
        this.checkPWD= this.checkPWD.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

        this.state={
            name:"",
            id:"",
            pwd:"",
            pwd2:""
        }
    }

    handleName=e =>{
        e.preventDefault();
        this.setState({
            name:e.target.value
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

    handlePWD2 = e =>{
        e.preventDefault();
        this.setState({
            pwd2:e.target.value
        })
    }

    checkPWD =e =>{
        e.preventDefault();
        console.log(this.state.pwd);
        console.log(this.state.pwd2);

    }


    onSubmit(e) {
        e.preventDefault();
        console.log("submit successful");
        console.log(this.state.pwd);
        console.log(this.state.pwd2);

        if (this.state.pwd == this.state.pwd2){

            alert("비밀번호가 일치합니다.")

            const newUser= {
                name:this.state.name,
                id:this.state.id,
                pwd:this.state.pwd
            };
            console.log("mark");
            console.log(this.state.id);
    
            axios.post('http://localhost:8080/team/users', newUser)
                .then(res => console.log(res.data));
    
            this.setState({
                    name:"",
                    id:"",
                    pwd:"",
                    pwd2:""
            })
            this.props.history.push("/")
        }
        
        else{
            alert("비밀번호가 일치하지 않습니다. 다시 입력하세요!")
        }

        

    }
    


  render(){
    return (
        <div className="signuppage" > 
            <form onSubmit = {this.onSubmit}>
                <div className="box"></div>
                <div className="content">
                <img className="projectimage" src={project}></img>
                <text className="signtext">Sign Up for Project Mate!</text>
                <input className="name" value={this.state.name} onChange={this.handleName} placeholder="enter your name"></input>
                <input className="id" value={this.state.id} onChange = {this.handleID} placeholder="enter id"></input>
                <input className="pwd" value={this.state.pwd} onChange = {this.handlePWD} placeholder="enter password"></input>
                <input className="pwd2" value={this.state.pwd2} onChange={this.handlePWD2} placeholder="enter password"></input>
                <button type="submit" className="signbutton">Sign in</button>
                <text className="explain">
                    # make classrooms<br/><br/>
                    # enter classroom <br/><br/>
                    # run a class community page <br/><br/>
                </text>
                </div>
            </form>
        </div>

    );
  }
}

SignUp.propTypes = {
}
SignUp.defaultProps = {
}


