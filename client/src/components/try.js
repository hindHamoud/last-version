import React, { Component } from 'react'
import { Button,Select,Radio,Modal,message,Steps,Form,DatePicker,Input,Row,Col  } from 'antd';
const { TextArea } = Input;
        const { Option } = Select;
export class Staff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p:'',
            pp:'',
            visible: false
        }}
        onChangep=(value)=>{this.setState({p:value}) }
        onChangepp=(e)=>{this.setState({pp:e.target.value}) }
        showModal = () => {this.setState({ visible: true, });};
  handleCancel = () => { this.setState({ visible: false });};
    render() {
        return (
        <div>
            <Form.Item  label="Criticality Level">
    <Select value={this.state.p} style={{ width: 120 }} onChange={this.onChangep} >
      <Option value="Criticat">Criticat</Option>
      <Option value="Important">Important</Option>
      <Option value="Non-Criticat">Non-Criticat</Option>
    </Select></Form.Item>

    <Form.Item 
    visible={this.state.visible}
     label="INCIDENT DESCRIPTION">
    <TextArea rows={4} style={{ width: 500 }}
    onChange={this.onChangepp}
    value={this.state.pp}/></Form.Item>
    <Button onClick={()=>this.setState({ visible: true, })}></Button>
        </div>
    )}}
        
  
       
          
          export default Staff;