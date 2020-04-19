import React, { Component } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Input ,Form} from 'antd';

export class Profile extends Component {
    constructor() {
        super()
        this.state = {
          phone:'',}}

        onChange=(e) =>{
            this.setState({phone:e}) }
        render(){
            const { TextArea } = Input;
    return(
          
      <div style={{ margin:'40px' }}>
          <Form.Item style={{width:'300px'}}> Email
          <Input  placeholder="your email" />
          </Form.Item>
          <Form.Item style={{width:'300px'}}> First name
          <Input  placeholder="your first name" />
          </Form.Item>
          <Form.Item style={{width:'300px'}}>Last name
          <Input placeholder="your last name" />
          </Form.Item>
          <PhoneInput style={{width:'300px'}}
  placeholder="Enter phone number"
  value={this.state.phone}
  onChange={this.onChange}/>
  {this.state.phone}
  <Form.Item style={{width:'300px'}}> Address
          <TextArea rows={4} />
          </Form.Item>


             </div>


              )}}
  
  
  export default Profile;