import React, { Component } from 'react'
import img from '../../photos/fire.png'


export class fire extends Component {

    render() {
    
    return(
        
      <div style={{margin:'30px'}}>
          <div style={{fontSize:'20px'}}>Impact:  High</div>
          <br/>
          <div style={{fontSize:'20px'}}>FIRE INCIDENT PROCESS :
          <br/>
          <img src={img} style={{height:'200px',width:'900px',marginTop:'20px'}}/>
          </div>
          <br/>
          <div style={{fontSize:'20px'}}>Mitigation:
              <ul>
                  <li>Evacuation Plan</li>
                  <li>Alarm System</li>
                  <li>Fire extinguishers</li>
              </ul>
          </div>


        </div>
    )}}
  
  
  export default fire;