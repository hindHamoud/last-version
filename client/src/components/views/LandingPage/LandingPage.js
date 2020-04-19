
import React, {Component} from 'react';
import './home.css'
import { Row, Col ,Input ,Avatar,Button,message,Select} from 'antd';
import img from "../../photos/background.jpg";
import {PhoneOutlined,EnvironmentOutlined,FacebookOutlined,TwitterOutlined,SlackOutlined} from '@ant-design/icons';
import email from "../../photos/email.webp"
import contact from "../../photos/contact.png"
import {submitSupport} from './submit'
const { Option } = Select;
class LandingPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      type:'',
        problem:'',
        email:'',   
        } }


onChangeEmail=(e)=>{
  this.setState({email:e.target.value}) }

onChangeProblem=(e)=>{
  this.setState({problem:e.target.value}) }

  onChangeType=(e)=>{
    this.setState({type:e})  }

  onSubmit=(e)=> {
    if(this.state.type==='')
{return(
  message.error('please select your problem category') 
)}else if(this.state.email==='') {
  return(
    message.error('please enter your email') 
  )
}
else if(this.state.problem==='') {
  return(
    message.error('please write your problem') 
  )
} else{     
    e.preventDefault()
    const newIncident = {
      type:this.state.type,
      email: this.state.email,
      problem: this.state.problem,}
      
    submitSupport(newIncident ).then(res => {
      message.success('thank you') ;
    })
  }}


render() {
  const { TextArea } = Input;
  return (

    <div className='page'  >
    <img src={img} className="background1" alt="background"/>
    <div className="text11"  >
      
      
    <div style={{fontSize:'20px',lineHeight:'40px',textShadow:'5px 5px #f9e9c9c',fontWeight: 'bold',margin:'30px',marginTop:'140px',marginRight:'50px'}}>We operate under the framework of a simple and easy to use website for atomate DR plans and
providing solutions through choosing the customer for the incident that you may face.</div>



 </div>

    
 <div style={{margin:'40px',marginTop:'20px'}}>
        <Row>

        <Col span={12} >
        
          <div style={{margin:'30px',background:'#dadfde',height:'300px'}}>
          <Avatar style={{backgroundColor:'#f1f1f1',margin:'30px',marginTop:'-32px'}} size={100} >
          <img height={60} width={60} src={contact} alt='contact'/> 
          </Avatar>
          <h3 style={{margin:'30px',marginTop:'-10px',display:'inline'}}>Contact Us</h3>          
          <div style={{fontFamily: 'apple',textAlign:'lift',fontSize:'18px',lineHeight:'40px',textShadow:'5px 5px #f9e9c9c',fontWeight: 'bold',color:'#6dbdbb',margin:'30px'}}>
            
            
        
        <div >  <PhoneOutlined  style={{fontSize:'30px',color:'black'}} />  +966531682593 - +966536908762 - +996541436747 </div>
        
        <div > <EnvironmentOutlined style={{fontSize:'30px',color:'black'}} /><t/>saudi arabia , qassim  </div>
            </div>
            <div style={{textAlign:'center'}}>
          <a  href='https://www.facebook.com/recoversy.ssite.1'>
          <FacebookOutlined style={{margin:'20px',fontSize:'30px',color:'black'}} />  </a>
          <a href="https://twitter.com/recoversy2">
          <TwitterOutlined style={{margin:'20px',fontSize:'30px',color:'black'}} />  </a>
          <a href="https://join.slack.com/t/recoversy/shared_invite/zt-dcjtsi80-MHkCJedfdf28Rc0DAIDzEw">
          <SlackOutlined style={{margin:'20px',fontSize:'30px',color:'black'}} />  </a>
          </div>

          </div>

    
      </Col>
        <Col span={12} >
        
        <div style={{margin:'30px',background:'#dadfde',height:'300px'}}>
          <Avatar style={{backgroundColor:'#f1f1f1',margin:'30px',marginTop:'-32px'}} size={100} >
          <img height={63} width={63} src={email} alt='support'/>  
          </Avatar>
          <h3 style={{margin:'30px',marginTop:'-13px',display:'inline'}}>Support</h3>
          

          
          
                
            <div style={{margin:'30px',marginTop:'18px'}}>
            <Select style={{width:'300px'}} value={this.state.type} style={{ width: 120 }} onChange={this.onChangeType} >
            <Option value=""> select</Option>
            <Option value="problem with web site">problem with web site</Option>
            <Option value="problem with report">problem with report</Option>
            <Option value="you have other incident">you have other incident</Option>
            <Option value="Another question or suggestion">Another question or suggestion</Option>
          </Select><br/>
            <Input placeholder="Your email" style={{ width: 200 }}
            onChange={this.onChangeEmail}
            value={this.state.email}
            />
            <br/>
          
 
         
          <TextArea placeholder="write your problem here please" rows={4} style={{ width: 300 }}
          onChange={this.onChangeProblem}
          value={this.state.problem}/>
          <br/>
    
          
          <Button type="primary" onClick={this.onSubmit} style={{background:'#6dbdbb',margin:'8px'}} >
                  Send
                </Button>
                <Button type="primary" href="mailto:recoversy.2020@gmail.com" subject={this.state.type} style={{background:'#6dbdbb'}} >
                 Or send email
                </Button></div>
             
           

          </div>
         

            
        </Col>
        </Row></div>
    
    </div>
  );
}}

export default LandingPage  ;