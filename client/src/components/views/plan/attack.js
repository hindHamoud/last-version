import React, { Component } from 'react'
import img from '../../photos/attack.png'



export class attack extends Component {

    render() {
    
    return(
        
      <div style={{margin:'30px'}}>
          <div style={{fontSize:'20px'}}>Impact:  High</div>
          <br/>
          <div style={{fontSize:'20px'}}>COMPUTER ATTACK PROCESS :
          <br/>
          <img src={img} style={{height:'200px',width:'900px',marginTop:'20px'}}/>
          </div>
          <br/>
          <div style={{fontSize:'20px'}}>Mitigation:
              <ul>
                  <li>Antivirus, Firewalls, Penetration , Testing and vulnerbility assessment</li>
              </ul>
          </div>
          <br/>
          <div style={{fontSize:'20px'}}>Resources:
          <ul>
              <li><a href="https://www.fireeye.com/solutions/incident-investigation.html">FIREEYE</a> for detect possible attacks </li>
              <li>Top 5 <a href="https://www.antivirusguide.com/best-antivirus-software/?lp=default&utm_source=google&utm_medium=cpc&sgv_medium=search&utm_campaign=8291830773&utm_content=90703775652&utm_term=%2Banti%20%2Bvirus%20%2Bsoftware&cid=400283380737&pl=&feeditemid=&targetid=kwd-18258248446&mt=b&network=g&device=c&adpos=&p1=&p2=&geoid=21449&gclid=CjwKCAjw4KD0BRBUEiwA7MFNTZ0uRxG78e2ijeYOAAEFAXXBAB-5MKN817392NgIUFPto7n_Wq1FnRoC7MAQAvD_BwE">antivirus </a>sofware based on <a href="https://www.antivirusguide.com/">antivirusGuide </a>website </li>
              
              </ul>
          </div>

        </div>
    )}}
  
  
  export default attack;