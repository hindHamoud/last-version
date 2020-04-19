import React from 'react';
import { INCIDENT_SERVER} from '../../Config'
import {connect} from "react-redux";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import {  Button, message,Spin } from 'antd';

  class select extends React.Component {

    constructor(props){
      super(props);
      this.state = {
          isLoading: false,
          reports: []
      }
  }


  

componentDidMount = () => {
  fetch(`${INCIDENT_SERVER}/`)
  .then(res=>res.json())
  .then(json=>{
    this.setState({
      isLoading:true,
      reports:json,
    })
  })
  
}
  printDocument=()=> {
    const pdf = new jsPDF("l", "mm", "a4");
    const input = document.getElementById('pdf');
    const input1 = document.getElementById('pdf1');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png',1.0);
        pdf.addImage(imgData, 'JPEG', 10, 5,270,200);
        pdf.addPage();
        html2canvas(input1)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png',1.0);
            pdf.addImage(imgData, 'JPEG', 10, 5,270,200);
            pdf.save("report.pdf")
          }) ; });
  }
     

    render(){
      const{isLoading,reports}=this.state;
      if(!isLoading){
        return <Spin size="large" />
      }else {return (
        <div className="tables"  style={{margin:'20px',width:'70%'}}>
      {reports.map(report=>{if(this.props.id === report._id)
        return<div>
          <div id="pdf">
<table className="table"  >
  <tr className="tr">
    <td className="td" style={{width:'40%',fontWeight:'bold'}}>Incident Name</td>
    <td className="td" style={{width:'60%'}}>{report.incidentName}</td>
  </tr>

  <tr className="tr">
    <td className="td"style={{fontWeight:'bold'}}>Incident Date</td>
    <td className="td">{report.incidentDate}</td>
  </tr>

  <tr className="tr">
    <td className="td" style={{fontWeight:'bold'}}>Reporting Date</td>
    <td className="td">{report.date}</td>
  </tr>

  <tr className="tr">
    <td className="td" style={{fontWeight:'bold'}}>Criticality Level</td>
    <td className="td">{report.incidentCriticality}</td>
  </tr>

  <tr className="tr">
    <td className="td" colspan="2" style={{background:'#afcdcf',fontWeight:'bold'}}>Contact Details of the Reporting Person</td>
  </tr>

  <tr className="tr">
    <td className="td" style={{fontWeight:'bold'}}>Nmae</td>
    <td className="td">{report.name}</td>
  </tr>

  <tr className="tr">
    <td className="td" style={{fontWeight:'bold'}}>Mobile Number</td>
    <td className="td">{report.mobile}</td>
  </tr>

  <tr className="tr">
    <td className="td" style={{fontWeight:'bold'}}>Email Address</td>
    <td className="td">{report.email}</td>
  </tr >

  <tr className="tr">
    <td className="td" style={{fontWeight:'bold'}}> Affected department </td>
    <td className="td">{report.departmentAffected}</td>
  </tr>

</table>
</div>
<div id="pdf1">
<h2>{report.incidentName}</h2>

<table className="table">
  <tr className="tr"><td className="td" style={{background:'#afcdcf',fontWeight:'bold'}}>INCIDENT DESCRIPTION</td></tr>
  <tr className="tr"><td className="td" style={{height:'70px'}}> {report.incidentDescription.map(i => {
            return(<div>{i}</div>) 
        })}</td></tr>
  <tr className="tr"><td className="td" style={{background:'#afcdcf',fontWeight:'bold'}}>RESOLUTION DISCRETION AND STEPS</td></tr>
  <tr className="tr"><td className="td" style={{height:'70px'}}> {report.resolutionDiscretion.map(i => {
            return(<div>{i}</div>) 
        })}</td></tr>
  <tr className="tr"><td className="td" style={{background:'#afcdcf',fontWeight:'bold'}}>RECOMMENDATIONS</td></tr>
  <tr className="tr"><td className="td" style={{height:'70px'}} > {report.recommendation.map(i => {
            return(<div>{i}</div>) 
        })}</td></tr>
        </table></div><Button onClick={this.printDocument} type="primary" > download as PDF </Button></div>})}
        
       </div>
      );
    }}}
    const mapStateToProps = (state) => {
      return {
        user: state.user
      }
    }
    
    export default connect(mapStateToProps)(select) ;