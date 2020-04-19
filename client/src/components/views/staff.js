import React, { Component } from 'react'
import { USER_SERVER} from '../Config'

import {connect} from "react-redux";
import { Spin } from 'antd';

export class Staff extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            users: []
        }
    }
    componentDidMount = () => {
        fetch(`${USER_SERVER}/`)
        .then(res=>res.json())
        .then(json=>{
          this.setState({
            isLoading:true,
            users:json,
          })
        })
        
      }
    render() {
        const{isLoading,users}=this.state;
        if(!isLoading){
          return <Spin size="large" />
        }else {return (
        <div>
     

        </div>
    )}}
        }
  
        const mapStateToProps = (state) => {
            return {
              user: state.user
            }
          }
          
          export default connect(mapStateToProps)(Staff);