import React, { Component } from 'react'
import level from '../../photos/Level.png'
import flow from '../../photos/flowchart.png'


export class Plan extends Component {

    render() {
    
    return(
        
      <div style={{margin:'30px'}}>
          
          <div style={{fontSize:'20px'}}>INCIDENT HANDLING:
              <ul>
                  <li>Incident reporting.</li>
                  <li>Incident analysis.</li>
                  <li>Incident response.</li>
              </ul>
          </div>
          <br/>
          <div style={{fontSize:'20px'}}>INCIDENT CRITICALITY :
              <ul>
                  <li>A criticality level should be assigned for each incident according to the following incident classification:</li>
                 
              </ul>
          </div>
          <br/>
          <img style={{height:'200px',width:'800px'}} src={level} />
          <br/>
          <div style={{fontSize:'20px',marginTop:'20px'}}>Flowchart show the processes of handling incident :
          </div>
          <br/>
          <img style={{height:'600px',width:'800px'}} src={flow} />


        </div>
    )}}
  
  
  export default Plan;