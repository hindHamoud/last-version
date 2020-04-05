import React, {Component} from 'react';
import {  Button, message } from 'antd';
import {getCurrentDate} from './today'
import {submitPlan} from './submit'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import './step3.css'




class report  extends Component{
    constructor(props) {
        super(props);
        this.state = {
          no:0, };
      }

        
      onSubmit=(e)=> {
        
        e.preventDefault()
        const newIncident = {
          admin:this.props.admin,
          incidentDate: this.props.incidentDate,
          incidentName: this.props.incidentName,
          incidentCriticality: this.props.incidentCriticality,
          name: this.props.name,
          address: this.props.address,
          mobile: this.props.mobile,
          email: this.props.email,
          departmentAffected: this.props.departmentAffected,
          incidentDescription: this.props.incidentDescription,
          resolutionDiscretion: this.props.resolutionDiscretion,
          recommendation: this.props.recommendation,
        }
        submitPlan(newIncident ).then(res => {
          message.success('report saved') ;
          this.setState({no:this.state.no+1})
        })
      }

      printDocument=()=> {
        const pdf = new jsPDF("l", "mm", "a4");
        const input = document.getElementById('pdf');
        const input1 = document.getElementById('pdf1');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png',1.0);
            pdf.addImage(imgData, 'JPEG', 10, 5,270,190);
            pdf.addPage();
            html2canvas(input1)
              .then((canvas) => {
                const imgData = canvas.toDataURL('image/png',1.0);
                pdf.addImage(imgData, 'JPEG', 10, 5,270,190);
                pdf.save("report.pdf")
              }) ; });
      }

    
    
    
    render() {
        
        return (
            <div className="tables"  style={{width:'50%'}}>
            <div id="pdf">
      <table className="table"  >
        <tr className="tr">
          <td className="td" style={{width:'40%',fontWeight:'bold'}}>Incident Name</td>
          <td className="td" style={{width:'60%'}}>{this.props.incidentName}</td>
        </tr>
      
        <tr className="tr">
          <td className="td"style={{fontWeight:'bold'}}>Incident Date</td>
          <td className="td">{this.props.incidentDate}</td>
        </tr>
      
        <tr className="tr">
          <td className="td" style={{fontWeight:'bold'}}>Reporting Date</td>
          <td className="td">{getCurrentDate()}</td>
        </tr>
      
        <tr className="tr">
          <td className="td" style={{fontWeight:'bold'}}>Criticality Level</td>
          <td className="td">{this.props.incidentCriticality}</td>
        </tr>
      
        <tr className="tr">
          <td className="td" colspan="2" style={{background:'#afcdcf',fontWeight:'bold'}}>Contact Details of the Reporting Person</td>
        </tr>
      
        <tr className="tr">
          <td className="td" style={{fontWeight:'bold'}}>Nmae</td>
          <td className="td">{this.props.name}</td>
        </tr>
      
        <tr className="tr">
          <td className="td" style={{fontWeight:'bold'}}>Address</td>
          <td className="td">{this.props.address.split('\n').map(i => {
                  return(<div>{i}</div>) 
              })}</td>
        </tr>
      
        <tr className="tr">
          <td className="td" style={{fontWeight:'bold'}}>Mobile Number</td>
          <td className="td">{this.props.mobile}</td>
        </tr>
      
        <tr className="tr">
          <td className="td" style={{fontWeight:'bold'}}>Email Address</td>
          <td className="td">{this.props.email}</td>
        </tr >
      
        <tr className="tr">
          <td className="td" style={{fontWeight:'bold'}}>Department affected  </td>
          <td className="td">{this.props.departmentAffected}</td>
        </tr>
      
      </table>
      </div>
      <div id="pdf1">
      <h4>{this.props.incidentName}</h4>
      
      <table className="table">
        <tr className="tr"><td className="td" style={{background:'#afcdcf',fontWeight:'bold'}}>INCIDENT DESCRIPTION</td></tr>
        <tr className="tr"><td className="td" style={{height:'70px'}}> {this.props.incidentDescription.split('\n').map(i => {
                  return(<div>{i}</div>) 
              })}</td></tr>
        <tr className="tr"><td className="td" style={{background:'#afcdcf',fontWeight:'bold'}}>RESOLUTION DISCRETION AND STEPS</td></tr>
        <tr className="tr"><td className="td" style={{height:'70px'}}> {this.props.resolutionDiscretion.split('\n').map(i => {
                  return(<div>{i}</div>) 
              })}</td></tr>
        <tr className="tr"><td className="td" style={{background:'#afcdcf',fontWeight:'bold'}}>RECOMMENDATIONS</td></tr>
        <tr className="tr"><td className="td" style={{height:'70px'}} > {this.props.recommendation.split('\n').map(i => {
                  return(<div>{i}</div>) 
              })}</td></tr>
      </table></div>
      <Button onClick={this.printDocument} type="primary" > download as PDF </Button>
                      
             </div>
        );
      }
    }
   
  
  export default report   ;