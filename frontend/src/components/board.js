import PropTypes from "prop-types";
import "./board.css";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class BoardPage extends Component {
    
    constructor(props){
        super(props);
        this.state={
            classname:"",
        }
    }
    
    componentDidMount(){
        this.state.classname=this.props.location.state;
        console.log("stamp2")
        
        console.log(this.state.classname);

        if ( 'token' in localStorage){
            console.log("hi")
        }
        else{
            console.log("how dare you")
            this.props.history.push({pathname:'/'})
        }

    }

    handleClick = e =>{
        e.preventDefault();
        var that = this;
        this.props.history.push({pathname:'/newboard', state:this.state.classname})

    }

  render(){
    return (
        <div className="boardpage" > 
                <text className="title" >
                    {this.props.location.state.classname}
                </text>

                    <text className="content">
                        {this.props.location.state.board.map(board=> 
                            <div >
                                <text className="boardtitle">{board.boardtitle}</text>
                                <text  className="boardcontent">{board.content}</text>
                                <text className="boardwriter">{board.writer}</text>
                                <br/>
                                <br/><br/>
                            </div>)}
                    </text>

               <button className="newbutton" onClick={this.handleClick}>+Add</button>
        </div>
    );
  }
}

BoardPage.propTypes = {
}
BoardPage.defaultProps = {
}
