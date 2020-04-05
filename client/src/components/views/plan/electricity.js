import React, { Component } from 'react'
import img from '../../photos/electricity.png'


export class electricity extends Component {

    render() {
    
    return(
      <div style={{margin:'30px'}}>
          <div style={{fontSize:'20px'}}>Impact:  High</div>
          <br/>
          <div style={{fontSize:'20px'}}>ELECTRICITY INTERRUPTION PROCESS :
          <br/>
          <img src={img} style={{height:'200px',width:'900px',marginTop:'20px'}}/>
          </div>
          <br/>
          <div style={{fontSize:'20px'}}>Mitigation:
              <ul>
                  <li>UPS uninterruptible power supply</li>
              </ul>
          </div>
          <br/>
          <div style={{fontSize:'20px'}}>Resources:
              <ul>
                  <li><a href="https://www.youtube.com/watch?v=AHxRW5-W-80">How to choose (UPS)</a></li>
                  <li><a href="https://www.amazon.com/Computer-Uninterruptible-Power-Supply-Units/b?ie=UTF8&node=764572">Some UPS devices in amazon</a></li>
              </ul>
          </div>
          
          


        </div>
    )}}
  
  
  export default electricity;