import React, { Component } from 'react'
import { Button,Select,Radio,Modal,message,Steps,Form,DatePicker,Input,Row,Col  } from 'antd';
import { connect } from "react-redux";
import {getCurrentDate} from './today'
import {submitPlan} from './submit'
import { withRouter } from "react-router-dom";
import img from '../../photos/background.jpg'
import './layout.css'
import report from '../../photos/report.png'
const { TextArea } = Input;
        const { Option } = Select;
export class Incident extends Component {
    constructor(props) {
        super(props)
        this.state = {
          incident: '',
          serious:'',
           current:0,
           incidentDate:'',
           incidentCriticality:'Criticat',
           name:props.user.userData.firstname+' '+props.user.userData.lastname,
           mobile:props.user.userData.phone,email:props.user.userData.email,
           departmentAffected:'',incidentDescription:'',resolutionDiscretion:'',recommendation:'',visible: false,
           incidentDescriptionS:[],resolutionDiscretionS:[],recommendationS:[],a:[],b:[],c:[]} }

          onChangeDepartment=(e)=>{this.setState({departmentAffected:e.target.value}) }
          onChangeDate=(date, dateString)=> {this.setState({incidentDate:dateString}); }
          onChangeCriticality=(value)=>{this.setState({incidentCriticality:value}) }
          onChangeDescription=(e)=>{this.setState({incidentDescription:e.target.value}) 
      }
          onChangeDescriptionS=(e)=>{this.state.incidentDescriptionS=e;
          }

          onChangeResolution=(e)=>{this.setState({resolutionDiscretion:e.target.value}) }
          onChangeResolutionS=(e)=>{this.setState({resolutionDiscretionS:e}) }
          onChangeRecommendation=(e)=>{this.setState({recommendation:e.target.value}) }
          onChangeRecommendationS=(e)=>{this.setState({recommendationS:e}) }


          onChangeIncident=(value) =>{ this.setState({incident:value}) }
          onChangeSerious = e => {this.setState({ serious: e.target.value});};


       
          forReport=()=>{
            if(this.state.incident=='EXTERNAL OR INTERNAL FIRE'){
              return(<div>

                <Form.Item  label="INCIDENT DESCRIPTION">
                <Select placeholder="Select "  mode="tags"  style={{ width: 500 }} onChange={this.onChangeDescriptionS}>
                <Option value="Damaged - defective electrical devices">Damaged - defective electrical devices</Option>
                <Option value="Deliberate fire - vandalism">Deliberate fire - vandalism</Option>
                <Option value="Human fault and misuse of equipment">Human fault and misuse of equipment</Option>
                <Option value="Electrical contact resulting from heavy rain">Electrical contact resulting from heavy rain</Option>
                <Option value="Poor maintenance of detection and alarm equipment">Poor maintenance of detection and alarmequipment</Option>
                <Option value=""></Option>
                </Select>
                <TextArea placeholder="write here " rows={4} style={{ width: 500 }}
                onChange={this.onChangeDescription}
                value={this.state.incidentDescription}/></Form.Item>
            
                <Form.Item   label="RESOLUTION DISCRETION AND STEPS">
                <TextArea placeholder="write here " rows={4} style={{ width: 500 }}
                onChange={this.onChangeResolution}
                value={this.state.resolutionDiscretion}/> </Form.Item>
            
            
                <Form.Item placeholder="Select " label="RECOMMENDATIONS">
                <Select mode="tags"  style={{ width: 500 }} onChange={this.onChangeRecommendationS}>
                
                <Option value="Regular maintenance of alarms">Regular maintenance of alarms</Option>
                <Option value="Check fire extinguishers periodically">Check fire extinguishers periodically</Option>
                <Option value="Ensure all work equipment protects against overheating">Ensure all work equipment protects against overheating</Option>
                <Option value="Test your smoke detectors.">Test your smoke detectors.</Option>
                <Option value="Inspect heating sources.">Inspect heating sources.</Option>

                
                </Select>
                <TextArea placeholder="write here " rows={4} style={{ width: 500 }}
                onChange={this.onChangeRecommendation}
                value={this.state.recommendation}/> </Form.Item>
                      </div>)
            }else if(this.state.incident=='ELECTRICITY INTERRUPTION'){
            return(<div>

              <Form.Item  label="INCIDENT DESCRIPTION">
              <Select placeholder="Select " mode="tags"  style={{ width: 500 }} onChange={this.onChangeDescriptionS}>
              <Option value="Misuse of the circuit">Misuse of the circuit</Option>
              <Option value="High energy demand">High energy demand</Option>
              <Option value="Climatic factors (storms - rain - lightning - etc)">Climatic factors (storms - rain - lightning - etc)</Option>
              <Option value="Natural factors (earthquakes - trees)">Natural factors (earthquakes - trees)</Option>
              <Option value="Cables break down as a result of the drilling">Cables break down as a result of the drilling</Option>
              </Select>
              <TextArea placeholder="write here " rows={4} style={{ width: 500 }}
              onChange={this.onChangeDescription}
              value={this.state.incidentDescription}/></Form.Item>
          
              <Form.Item   label="RESOLUTION DISCRETION AND STEPS">
              <TextArea placeholder="write here " rows={4} style={{ width: 500 }}
              onChange={this.onChangeResolution}
              value={this.state.resolutionDiscretion}/> </Form.Item>
          
          
              <Form.Item placeholder="Select " label="RECOMMENDATIONS">
              <Select mode="tags"  style={{ width: 500 }} onChange={this.onChangeRecommendationS}>
              <Option value="Avoid overloading of electric mains">Avoid overloading of electric mains</Option>
              <Option value="Use proper electrical wiring ">Use proper electrical wiring </Option>
              <Option value="Get a backup power sources">Get a backup power sources</Option>
              <Option value="Report unusual observation immediately">Report unusual observation immediately</Option>
              </Select>
              <TextArea placeholder="write here " rows={4} style={{ width: 500 }}
              onChange={this.onChangeRecommendation}
              value={this.state.recommendation}/> </Form.Item>
                    </div>)
          }else if(this.state.incident=='COMPUTER ATTACK'){
          return(<div>

            <Form.Item  label="INCIDENT DESCRIPTION">
            <Select placeholder="Select " mode="tags"  style={{ width: 500 }} onChange={this.onChangeDescriptionS}>
            <Option value="Phishing and spear phishing attacks">Phishing and spear phishing attacks</Option>
            <Option value="Malware attack">Malware attack</Option>
            <Option value="SQL injection attack">SQL injection attack</Option>
            <Option value="denial-of-service (DDoS) attacks">denial-of-service (DDoS) attacks</Option>
            <Option value="Man-in-the-middle (MitM) attack">Man-in-the-middle (MitM) attack</Option>
            </Select>
            <TextArea placeholder="write here " rows={4} style={{ width: 500 }}
            onChange={this.onChangeDescription}
            value={this.state.incidentDescription}/></Form.Item>
        
            <Form.Item   label="RESOLUTION DISCRETION AND STEPS">
            <TextArea placeholder="write here " rows={4} style={{ width: 500 }}
            onChange={this.onChangeResolution}
            value={this.state.resolutionDiscretion}/> </Form.Item>
        
        
            <Form.Item placeholder="Select " label="RECOMMENDATIONS">
            <Select mode="tags"  style={{ width: 500 }} onChange={this.onChangeRecommendationS}>
            <Option value="Scan all servers to diagnose the attack">Scan all servers to diagnose the attack</Option>
            <Option value="Use strong password">Use strong password</Option>
            <Option value="Never leave devices unattended">Never leave devices unattended</Option>
            <Option value="Install anti-virus protection">Install anti-virus protection</Option>
            <Option value="Avoid visiting unknown websites or downloading software from untrusted sources">Avoid visiting unknown websites or downloading software from untrusted sources</Option>
            </Select>
            <TextArea placeholder="write here " rows={4} style={{ width: 500 }}
            onChange={this.onChangeRecommendation}
            value={this.state.recommendation}/> </Form.Item>
                  </div>)
        }}

            onSubmit=(e)=> {
              e.preventDefault()
              const newIncident = {
                admin:this.props.user.userData._id,
                incidentDate: this.state.incidentDate,incidentName: this.state.incident,
                incidentCriticality: this.state.incidentCriticality,
                name: this.state.name, address: this.state.address,mobile: this.state.mobile, email: this.state.email,
                departmentAffected: this.state.departmentAffected,
                incidentDescription: this.state.a,
                resolutionDiscretion: this.state.b,
                recommendation: this.state.c,}
              submitPlan(newIncident ).then(res => {this.setState({visible: false,});
            window.location.reload(true); }) }


  showModal = () => {this.setState({ visible: true, });};
  handleCancel = () => { this.setState({ visible: false });};
  


            next() {
              if(this.state.current==0 ){
                if(this.state.incident==''||this.state.serious=='')
                message.error('please complete all field')
                else{this.setState({ current :this.state.current + 1});}
              }else if(this.state.current==2 ){
                if(this.state.incidentDate==''||this.state.departmentAffected==''||this.state.incidentCriticality=='')
                message.error('please complete all field')
                else{this.setState({ current :this.state.current + 1})
                this.state.incidentDescription.split('\n').map(i=>this.state.a.push(i))
                this.state.resolutionDiscretion.split('\n').map(i=>this.state.b.push(i))
                this.state.resolutionDiscretion.split('\n').map(i=>this.state.c.push(i))
                this.state.a=[...this.state.incidentDescriptionS,...this.state.a]
                this.state.b=[...this.state.resolutionDiscretionS,...this.state.b]
                this.state.c=[...this.state.recommendationS,...this.state.c]}
              }else {
                this.setState({ current :this.state.current + 1})}}


            check=()=>{
              if(this.state.serious=='No'){return(<h5>Manage incident as normal activity</h5>)
              }else{return(<h5>Notify department manager</h5>)} }

            prev() {
              const current = this.state.current - 1;
              this.setState({ current });}

    render() {
      
        const { Step } = Steps;

const steps = [
  {title: 'First',
    content: <div style={{ margin:'40px' }}> 
    <h6> What is the incident you face </h6>
    <Select defaultValue="Select" style={{ width: 300 }} onChange={this.onChangeIncident}>
    <Option value="EXTERNAL OR INTERNAL FIRE">EXTERNAL OR INTERNAL FIRE</Option>
    <Option value="ELECTRICITY INTERRUPTION">ELECTRICITY INTERRUPTION</Option>
    <Option value="COMPUTER ATTACK">COMPUTER ATTACK</Option></Select>
  <div style={{fontSize:'15px'}}>Could this be serious adverse incident
  <Radio.Group style={{margin:'10px'}} onChange={this.onChangeSerious} value={this.state.serious}>
      <Radio value='Yes'>Yes</Radio>
      <Radio value='No'>No</Radio>
    </Radio.Group></div></div>,},
{title: 'Second',
content:<div style={{margin:'40px'}}>{this.check()}
<br/>
    <h5>Then complete the report and send it to the relevant department</h5></div>},
  {title: 'Third',
    content: <div>
      <Row>

        <Col span={8}>
    <Form.Item  label="affected Department">
      <Input placeholder="" style={{ width: 200 }}
      onChange={this.onChangeDepartment}
      value={this.state.departmentAffected}/>
    </Form.Item>
    </Col>

    <Col span={8}>
    <Form.Item  label="Incident Date">
    <DatePicker 
    onChange={this.onChangeDate}/></Form.Item>
    </Col>

<Col span={8}>
    <Form.Item  label="Criticality Level">
    <Select value={this.state.incidentCriticality} style={{ width: 120 }} onChange={this.onChangeCriticality} >
      <Option value="Critical">Critical</Option>
      <Option value="Important">Important</Option>
      <Option value="Non-Critical">Non-Critical</Option>
    </Select></Form.Item>
    </Col>

    </Row>
{this.forReport()}
  </div>,
  },
  {
    title: 'Last',
    content: <div className="tables"  style={{width:'90%'}}>
    <div id="pdf">
<table className="table"  >
<tr className="tr">
  <td className="td" style={{width:'40%',fontWeight:'bold'}}>Incident Name</td>
  <td className="td" style={{width:'60%'}}>{this.state.incident}</td>
</tr>

<tr className="tr">
  <td className="td"style={{fontWeight:'bold'}}>Incident Date</td>
  <td className="td">{this.state.incidentDate}</td>
</tr>

<tr className="tr">
  <td className="td" style={{fontWeight:'bold'}}>Reporting Date</td>
  <td className="td">{getCurrentDate()}</td>
</tr>

<tr className="tr">
  <td className="td" style={{fontWeight:'bold'}}>Criticality Level</td>
  <td className="td">{this.state.incidentCriticality}</td>
</tr>

<tr className="tr">
  <td className="td" colspan="2" style={{background:'#afcdcf',fontWeight:'bold'}}>Contact Details of the Reporting Person</td>
</tr>

<tr className="tr">
  <td className="td" style={{fontWeight:'bold'}}>Nmae</td>
  <td className="td">{this.state.name}</td>
</tr>

<tr className="tr">
  <td className="td" style={{fontWeight:'bold'}}>Mobile Number</td>
  <td className="td">{this.state.mobile}</td>
</tr>

<tr className="tr">
  <td className="td" style={{fontWeight:'bold'}}>Email Address</td>
  <td className="td">{this.state.email}</td>
</tr >

<tr className="tr">
  <td className="td" style={{fontWeight:'bold'}}>Department affected  </td>
  <td className="td">{this.state.departmentAffected}</td>
</tr>

</table>
</div>
<div id="pdf1">
<h4>{this.state.incident}</h4>

<table className="table">
<tr className="tr"><td className="td" style={{background:'#afcdcf',fontWeight:'bold'}}>INCIDENT DESCRIPTION</td></tr>
<tr className="tr"><td className="td" style={{height:'70px'}}> {this.state.a.map(i => {
          return(<div>{i}</div>) 
      })}</td></tr>
<tr className="tr"><td className="td" style={{background:'#afcdcf',fontWeight:'bold'}}>RESOLUTION DISCRETION AND STEPS</td></tr>
<tr className="tr"><td className="td" style={{height:'70px'}}> {this.state.b.map(i => {
          return(<div>{i}</div>) 
      })}</td></tr>
<tr className="tr"><td className="td" style={{background:'#afcdcf',fontWeight:'bold'}}>RECOMMENDATIONS</td></tr>
<tr className="tr"><td className="td" style={{height:'70px'}} > {this.state.c.map(i => {
          return(<div>{i}</div>) 
      })}</td></tr>
</table></div>
              
     </div>,
  },
];
const { current } = this.state;
    return(
          
      
             <div style={{fontFamily:'apple',marginTop:'200px'}}>
               <img src={img} className="background" alt="background"/>
    <div className="text1"  >
      <Row>
      <Col span={15}>
    <img src={report} style={{marginTop:'80px'}} width={700} height={300}/>
</Col>
      <Col span={9} style={{marginTop:'180px'}}><Button type="primary" onClick={this.showModal}> New report </Button>
             <Modal width={800}
               title="Reporting"
               visible={this.state.visible}
               onCancel={this.handleCancel}
               footer={null} >
             <div>
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
              save report
            </Button>
          )}
        </div>
      </div>
</Modal></Col>
        

</Row>
 </div>  
           </div>
         )}}
  
         const mapStateToProps = state => {return { user: state.user, }}

      export default connect(mapStateToProps)(withRouter(Incident)) ;