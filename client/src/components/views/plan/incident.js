import React, {Component} from 'react';
import { Steps, Button, message } from 'antd';
import { Input ,Form,DatePicker } from 'antd';
import { connect } from "react-redux";
import {submitPlan} from './submit'
import Fire from './fire'
import Electricity from './electricity'
import Epidemic from './epidemic'
import Attack from './attack'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import {getCurrentDate} from './today'
import Report from './report'
import './step3.css'
const { Step } = Steps;



class Incident extends Component{
    constructor(props) {
        super(props);
        this.state = {
          current:0,
          admin:props.user.userData._id,
      incidentName: this.props.incident,
      incidentDate:'',
      incidentCriticality:'high',
      name:'',
      address:'',
      mobile:'',
      email:props.user.userData.email,
      departmentAffected:'',
      incidentDescription:'',
      resolutionDiscretion:'',
      recommendation:'',
      update:this.props.update
          
        };
      }
      componentDidUpdate(pP,pS,sS){
        if(pP.update !== this.props.update && pS.current !==0){
          this.setState({current:this.props.current})
          console.log(this.state.current);
        }}
        
 

      onChangeName=(e)=>{
        this.setState({name:e.target.value}) }

      onChangeAddress=(e)=>{
        this.setState({address:e.target.value}) }

      onChangeEmail=(e)=>{
        this.setState({email:e.target.value}) }

      onChangeMobile=(e)=>{
        this.setState({mobile:e.target.value}) }

      onChangeDepartment=(e)=>{
        this.setState({departmentAffected:e.target.value}) }

      
        onChangeDate=(date, dateString)=> {
          this.setState({incidentDate:dateString});
        }

      onChangeCriticality=(e)=>{
        this.setState({incidentCriticality:e.target.value}) }

      onChangeDescription=(e)=>{
        this.setState({incidentDescription:e.target.value}) }

      onChangeResolution=(e)=>{
        this.setState({resolutionDiscretion:e.target.value}) }

      onChangeRecommendation=(e)=>{
        this.setState({recommendation:e.target.value}) }
        
        
      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
      page=()=>{
        if (this.props.incident=='External or Internal Fire'){
        return(<Fire/>)
      }else if (this.props.incident=='Electricity interruption')
      {return(<Electricity/>)}
      else if (this.props.incident=='Epidemic, pandemic')
      {return(<Epidemic/>)}
      else if (this.props.incident=='Computer attack')
      {return(<Attack/>)}
    }
    render() {
      const { TextArea } = Input;
      
      const steps = [
        {
          title: 'Incident plan',
          content: this.page()
        },
        {
          title: 'Filling the report',
          content: <div>
          <div style={{marginTop:'20px',border:'outset'}}>
            <div style={{margin:'20px'}}>
          YOUR INFORMATION :
 
          <Form.Item  label="Name">
            <Input placeholder="Name" style={{ width: 200 }}
            onChange={this.onChangeName}
            value={this.state.name}
            />
          </Form.Item>
 
          <Form.Item  label="Address"> 
          <TextArea rows={4} style={{ width: 300 }}
          onChange={this.onChangeAddress}
          value={this.state.address}/>
          </Form.Item>
 
          <Form.Item  label="Email">
            <Input placeholder="" style={{ width: 200 }}
            onChange={this.onChangeEmail}
            value={this.state.email}/>
          </Form.Item>
 
          <Form.Item  label="Mobile Number">
            <Input placeholder="" style={{ width: 200 }}
            onChange={this.onChangeMobile}
            value={this.state.mobile}/>
          </Form.Item>
 
 
          <Form.Item  label="Department have been affected by the incident">
            <Input placeholder="" style={{ width: 200 }}
            onChange={this.onChangeDepartment}
            value={this.state.departmentAffected}/>
          </Form.Item>
          </div>

          </div>
 
          <Form.Item  label="Incident Date">
          <DatePicker 
          onChange={this.onChangeDate}/></Form.Item>
 
          <Form.Item  label="Criticality Level">
          <select value={this.state.incidentCriticality} style={{ width: 120 }} onChange={this.onChangeCriticality} >
            <option value="Criticat">Criticat</option>
            <option value="Important">Important</option>
            <option value="Non-Criticat">Non-Criticat</option>
          </select></Form.Item>
 
          
          <Form.Item  label="INCIDENT DESCRIPTION">
          <TextArea rows={4} style={{ width: 500 }}
          onChange={this.onChangeDescription}
          value={this.state.incidentDescription}/></Form.Item>
 
          <Form.Item  label="RESOLUTION DISCRETION AND STEPS">
          <TextArea rows={4} style={{ width: 500 }}
          onChange={this.onChangeResolution}
          value={this.state.resolutionDiscretion}/> </Form.Item>
 
     
          <Form.Item  label="RECOMMENDATIONS">
          <TextArea rows={4} style={{ width: 500 }}
          onChange={this.onChangeRecommendation}
          value={this.state.recommendation}/> </Form.Item>
        </div>,
        },
        {
          title: 'Report',
          content: <Report 
          admin={this.state.admin}
          incidentDate= {this.state.incidentDate}
          incidentName= {this.state.incidentName}
          incidentCriticality= {this.state.incidentCriticality}
          name= {this.state.name}
          address= {this.state.address}
          mobile= {this.state.mobile}
          email= {this.state.email}
          departmentAffected= {this.state.departmentAffected}
          incidentDescription= {this.state.incidentDescription}
          resolutionDiscretion= {this.state.resolutionDiscretion}
          recommendation={this.state.recommendation}/> ,
        },
      ];
        const { current } = this.state;
        
        return (
          <div style={{margin:'40px',marginRight:'60px'}}>
            <h1>{this.props.incident}</h1>
            
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => this.next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={this.onSubmit}>
                  Save
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
              )}
            </div>
          </div>
        );
      }
    }
    const mapStateToProps = state => {
      return {
          user: state.user,
      }
  }
  
  
  export default connect(mapStateToProps)(Incident)   ;