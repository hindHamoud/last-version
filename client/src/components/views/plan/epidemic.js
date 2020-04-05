import React, { Component } from 'react'
import img from '../../photos/epidemic.png'


export class epidemic extends Component {

    render() {
    
    return(
        
      <div style={{margin:'30px'}}>
          <div style={{fontSize:'20px'}}>Impact:  High</div>
          <br/>
          <div style={{fontSize:'20px'}}>Mitigation:
              <ul>
                  <li>Pandemic response plan.</li>
                  <li>Providing a remote working environment.</li>
              </ul>
          </div>
          <br/>
          <div style={{fontSize:'20px'}}>EPIDEMIC , PANDAMIC INCIDENT PROCESS :
          <br/>
          <img src={img} style={{height:'200px',width:'900px',marginTop:'20px'}}/>
              
          </div>
          <br/>
          <div style={{fontSize:'20px'}}>Resourcess:
              <ul>
                  <li><a href="https://www.who.int/">World Health Organization</a></li>
                  
              </ul>
          </div>


        </div>
    )}}
  
  
  export default epidemic;