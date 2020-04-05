
import React, {Component} from 'react';
import './home.css'
import { Row, Col } from 'antd';
import img from "../../photos/background.jpg";
import Support from './support'
import scenario from '../../photos/sc.png'

class LandingPage extends Component{
  
render() {
  return (

    <div className='page'  >
    <img src={img} className="background" alt="background"/>
    <div className="text1"  >
      <Row>
      <Col span={7}><img src={scenario} style={{height:'450px',width:'270px'}}/></Col>
        <Col span={17}>
    <div style={{fontSize:'20px',lineHeight:'40px',textShadow:'5px 5px #f9e9c9c',fontWeight: 'bold',margin:'30px',marginTop:'140px',marginRight:'50px'}}>We operate under the framework of a simple and easy to use website for atomate DR plans and
providing solutions through choosing the customer for the incident that you may face.</div></Col>

</Row>
 </div>

    
    <Support/>
    
    </div>
  );
}}

export default LandingPage  ;