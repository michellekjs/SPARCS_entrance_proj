import PropTypes from "prop-types";
import "./class.css";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


export default class ClassPage extends Component {
    constructor(props) {
        super(props);
        this.handleClassCode=this.handleClassCode.bind(this);
        this.handlePWD = this.handlePWD.bind(this);
        this.handleClassDescription = this.handleClassDescription.bind(this);
        this.handlePwdCheck = this.handlePwdCheck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);


        this.state = {
            classname:"",
            classpwd:"",
            classdescrip:"",
            checkname:"",
            checkpwd:"",
            classcode:"",
            password:""
        };
    }

    handleClassCode1 = e =>{
        e.preventDefault();
        this.setState({
            classcode:e.target.value
        })
    }

    handleClassPassword = e =>{
        e.preventDefault();
        this.setState({
            password:e.target.value
        })
    }

    handleClassCode=e=>{
        e.preventDefault();
        this.setState({
            classname:e.target.value
        })
    }    

    handlePWD=e=>{
        e.preventDefault();
        this.setState({
            classpwd:e.target.value
        })
    }

    handleClassDescription =e =>{
        e.preventDefault();
        this.setState({
            classdescrip:e.target.value
        })

    }

    handlePwdCheck = e =>{
        e.preventDefault();
        this.setState({
            pwdcheck:e.target.value
        })
    }

    onSubmit2(e) {
        e.preventDefault();
        console.log("submit2 in action")
        axios.get("http://locahost:4000/team/classfind/"+this.state.classcode+"/"+this.state.password)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err));

        this.setState({
            classcode:"",
            password:""
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log("submit about new class been successful")

        const newClass={
            classname:this.state.classname,
            classpwd:this.state.classpwd,
            classdescrip:this.state.classdescrip
        };

        
        axios.post("http://localhost:4000/team/class", newClass)
            .then(res=>console.log(res.data))
            .then(console.log("help"))

        this.setState({
            classname:"",
            classpwd:"",
            classdescrip:""
        })
    }





  render(){
    return (
        <div className="page">
            <form onSubmit= {this.onSubmit2}>
                <div className="searchclass"> 
                    <text className="title">Enter Room</text>
                    <input placeholder="class code" value={this.state.classcode} onChange={this.handleClassCode1} className="code"></input>
                    <input placeholder="password" value={this.state.password} onChange={this.handleClassPassword} className="pwd"></input>
                    <button className="searchbutton" >  Search </button>
                </div>
            </form>

            <div className="makeclass">
                <form onSubmit = {this.onSubmit}>
                    <text className="title">Create Room</text>
                    <input placeholder="name" value={this.state.classname} onChange={this.handleClassCode} className="name"></input>
                    <input placeholder="password" value={this.state.classpwd} onChange={this.handlePWD} className="password"></input>
                    <input placeholder="short description" value={this.state.classdescrip} onChange={this.handleClassDescription} className="description"></input>
                    <button className="button"> Make Class </button>
                </form>
                
            </div>
        </div>
    );
  }
}

ClassPage.propTypes = {
}
ClassPage.defaultProps = {
}


