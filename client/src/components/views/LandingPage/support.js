
import React, {Component} from 'react';
import { Row, Col ,Input ,Form,Avatar,Button,message} from 'antd';
import {MailOutlined,PhoneOutlined,EnvironmentOutlined,FacebookOutlined,TwitterOutlined,SlackOutlined} from '@ant-design/icons';
import email from "../../photos/email.webp"
import contact from "../../photos/contact.png"
import {submitSupport} from './submit'
class support extends Component{
  constructor(props){
    super(props);
    this.state = {
      type:'',
        problem:'',
        email:'',
    
        
    }
}


onChangeEmail=(e)=>{
  this.setState({email:e.target.value}) 
}

onChangeProblem=(e)=>{
  this.setState({problem:e.target.value}) }

  onChangeType=(e)=>{
    this.setState({type:e.target.value}) 
  }

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
      problem: this.state.problem,
      
    }
    submitSupport(newIncident ).then(res => {
      message.success('thank you') ;
    })
  }}
render() {
  const { TextArea } = Input;
  return (
    <div style={{margin:'40px',marginTop:'20px'}}>
        <Row>

        <Col span={12} >
        
          <div style={{margin:'30px',background:'#dadfde',height:'300px'}}>
          <Avatar style={{backgroundColor:'#f1f1f1',margin:'30px',marginTop:'-32px'}} size={100} >
          <img height={60} width={60} src={contact}/> 
          </Avatar>
          <h3 style={{margin:'30px',marginTop:'-10px',display:'inline'}}>Contact Us</h3>          
          <div style={{fontFamily: 'apple',textAlign:'lift',fontSize:'18px',lineHeight:'40px',textShadow:'5px 5px #f9e9c9c',fontWeight: 'bold',color:'#6dbdbb',margin:'30px'}}>
            
            
        
        <div >  <PhoneOutlined  style={{fontSize:'30px',color:'black'}} />  +966531682593 - +966536908762 - +996541436747 </div>
        
        <div > <EnvironmentOutlined style={{fontSize:'30px',color:'black'}} /><t/>saudi arabia , qassim  </div>
            </div>
            <div style={{textAlign:'center'}}>
          <a  href='https://developers.facebook.com/settings/developer/community/'>
          <FacebookOutlined style={{margin:'20px',fontSize:'30px',color:'black'}} />  </a>
          <a href="https://twitter.com/home?lang=en">
          <TwitterOutlined style={{margin:'20px',fontSize:'30px',color:'black'}} />  </a>
          <a href="https://app.slack.com/client/T011B9336TG/learning-slack">
          <SlackOutlined style={{margin:'20px',fontSize:'30px',color:'black'}} />  </a>
          </div>

          </div>

    
      </Col>
        <Col span={12} >
        
        <div style={{margin:'30px',background:'#dadfde',height:'300px'}}>
          <Avatar style={{backgroundColor:'#f1f1f1',margin:'30px',marginTop:'-32px'}} size={100} >
          <img height={63} width={63} src={email}/>  
          </Avatar>
          <h3 style={{margin:'30px',marginTop:'-13px',display:'inline'}}>Support</h3>
          

          
          
                
            <div style={{margin:'30px',marginTop:'18px'}}>
            <select style={{width:'300px'}} value={this.state.type} style={{ width: 120 }} onChange={this.onChangeType} >
            <option value="problem with web site">problem with web site</option>
            <option value="problem with report">problem with report</option>
            <option value="you have other incident">you have other incident</option>
            <option value="Another question or suggestion">Another question or suggestion</option>
          </select><br/>
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
    
  );
}}

export default support  ;