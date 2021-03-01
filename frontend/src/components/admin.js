import PropTypes from "prop-types";
import "./admin.css";
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import axios from "axios";



export default class Admin extends Component {
  constructor(props) {
      super(props);
      this.state = {
          list:[],
          color:'red'
      };
  }


  componentDidMount (){
      var that  = this;
      axios.get("http://localhost:4000/team/getpermission")
      .then(function(res){
        console.log(res.data.status)
        console.log("stamp")
        that.setState({list: res.data});
        console.log(that.state.list)
    })
        
  }

  handleButtonClick(p){
      var that = this;
      
      axios.get("http://localhost:4000/team/changepermission/"+p)
      .then(function(res){
          console.log(res)
          console.log(res.data.status)
          console.log("where");
      })
      window.location.replace("/admin")
     
  }

  
  render() {
    return (
        <div className="adminpage">
          <div className="admintitle">Admin Page</div>
          <div style={{marginTop:'100px'}}></div>
            {this.state.list.map(result=> 
                <div>
                    <br/>
                    <a style={{ marginLeft: '300px' }}> {result.username} </a>
                    <a style={{ marginLeft: '100px' }}> {result.status} </a>  
                    <a style={{ marginLeft: '300px' }}><button className = "permissionbutton" onClick={() => this.handleButtonClick(result.username)} style={{'visibility':this.state}}> Change Permission </button></a>
                    <br/>
                  </div>
            )}
            </div>
    );
  }
}

Admin.propTypes = {
}
Admin.defaultProps = {
}
