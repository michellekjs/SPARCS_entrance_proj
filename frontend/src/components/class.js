import PropTypes from "prop-types";
import "./class.css";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import jwt_decode from "jwt-decode";


export default class ClassPage extends Component {
    constructor(props) {
        super(props);
        this.handleClassCode=this.handleClassCode.bind(this);
        this.handlePWD = this.handlePWD.bind(this);
        this.handleClassDescription = this.handleClassDescription.bind(this);
        this.handlePwdCheck = this.handlePwdCheck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);



        this.state = {
            classname:"",
            classpwd:"",
            classdescrip:"",
            checkname:"",
            checkpwd:"",
            classcode:"",
            password:"",
            visibility1:"",
            visibility2:""
        };
    }

    componentDidMount(){
        if ( 'token' in localStorage){
             var token = localStorage.getItem("token");
            var decoded = jwt_decode(token);
          console.log(decoded.permission);

            if (decoded.permission == "student"){
                this.setState({visibility1:"visible", visibility2:"hidden"})
            }
            else{
                this.setState({visibility1:"visible", visibility2:"visible"})
            }
        }
        else{
            console.log("how dare you")
            this.props.history.push({pathname:'/'})
        }
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
        console.log("submit2 in action");
        var that = this;
        axios.get("http://localhost:4000/team/classfind/"+this.state.classcode+"/"+this.state.password)
        .then(function(res){
            console.log(res);
            if (res.data.toString()=="fail"){ console.log("there is no such room")}
            else{that.props.history.push({pathname:'/match/', state:res.data})}
        })

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

    onButtonClick = e => {

        var token = localStorage.getItem("token");
        var decoded = jwt_decode(token);
        console.log(decoded.id);

        const newConfirm={
            username: decoded.id,
            status:"waiting"
        }

        axios.post("http://localhost:4000/team/confirm",newConfirm)
        .then(res => console.log(res.data))

    }





  render(){
    return (
        <div className="page">

            <div className="box"></div>
            <div className="maintitle"> Classroom </div>
            <form onSubmit= {this.onSubmit2} >
                <div className="searchclass" style={{'visibility': this.state.visibility1}}> 
                    <text className="title">Enter Room</text>
                    <input placeholder="class code" value={this.state.classcode} onChange={this.handleClassCode1} className="code"></input>
                    <input placeholder="password" value={this.state.password} onChange={this.handleClassPassword} className="pwd"></input>
                    <button className="searchbutton" >  Search </button>
                </div>
            </form>
            <button className="permission" onClick={this.onButtonClick}>Get Permission for establishing rooms</button>
            {/**/}

            <div className="makeclass" style={{'visibility': this.state.visibility2}}>
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


