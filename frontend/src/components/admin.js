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
          if (res.data.status == "done"){
            that.setState({'color':'hidden'});
          }
          else{
            that.setState({'color':'visible'});
          }
      })
     
  }


  render() {
    return (
        <div className="adminpage">
            {this.state.list.map(result=> 
                <div>
                    <br/>
                    <div className='contenttitle'>{result.username}</div>
                    <div className='contentwriter' >{result.status}</div>
                    <button className = "permissionbutton" onClick={() => this.handleButtonClick(result.username)} style={{'visibility':this.state.color}}> Change Permission </button>
                    <br/>
                   
                </div>)
                }
        </div>

    );
  }
}
Admin.propTypes = {
}
Admin.defaultProps = {
}


