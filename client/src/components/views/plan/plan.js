import React from 'react';
import { PLAN_SERVER} from '../../Config'
import {connect} from "react-redux";

import risk from '../../photos/Risk.png'
import risk1 from '../../photos/riskrating.png'
import critical from '../../photos/critical.png'
import flow from '../../photos/flowchart.png'
import Create from './create'

import {  Button, message,Divider,Spin } from 'antd';

  class select extends React.Component {

    constructor(props){
      super(props);
      this.state = {
          isLoading: false,
          count:'',
          plan: []}}



  

componentDidMount = () => {
  fetch(`${PLAN_SERVER}/auth`)
  .then(res=>res.json())
  .then(json=>{
    this.setState({
      isLoading:true,
      plan:json,
      
    })
  }) 
}

     

    render(){
  
      const{isLoading,plan}=this.state;
      if(!isLoading){
        return <Spin size="large" />
      }else if(plan==null){
          return(<div><Create/></div>)

      }else
           {return (
          
          <div style={{margin:'80px'}}>
            <div >
            <Divider id="pdf" orientation="left"><h4>RISK ASSESSMENT</h4></Divider>
            <div>there are many threats/incident may face organization .</div>
            <div>Therefore,should assessed probability and impact for each incident for prioritized and mitigated</div>

            <h5>1\ RISK RATING</h5>
            <img src={risk1} height={130} width={400}/>
            <br/>
            
            <img src={risk} height={150} width={550} style={{marginTop:'20px'}}/>
            <h5>2\ LIST OF THREATS/ INCIDENT </h5>
            <table className="table" style={{width:'70%'}}>

                <tr className="td">
                    <th className="td">Threat</th>
                    <th className="td">Probability</th>
                    <th className="td">Impact</th>
                    <th className="td">Risk Rating</th>
                    <th className="td">Mitigation</th>
                </tr>
                
                <tr className="td">
                <td className="td">Extrenal ot Internal Fire</td>
                <td className="td">{plan.fireIncident[0]}</td>
                <td className="td">{plan.fireIncident[1]}</td>
                <td className="td">{plan.fireIncident[0]+plan.fireIncident[1]}</td>
                <td className="td">1\Evacuation Plan. 2\Alarm System 3\Fire extinguishers</td>
                </tr>

                <tr className="td">
                <td className="td">Electicity Interruptin</td>
                <td className="td">{plan.electricityIncident[0]}</td>
                <td className="td">{plan.electricityIncident[1]}</td>
                <td className="td">{plan.electricityIncident[0]+plan.electricityIncident[1]}</td>
                <td className="td">UPS uninterruption power supply</td>
                </tr>

                <tr className="td">
                <td className="td">Computer Attak</td>
                <td className="td">{plan.attackIncident[0]}</td>
                <td className="td">{plan.attackIncident[1]}</td>
                <td className="td">{plan.attackIncident[0]+plan.attackIncident[1]}</td>
                <td className="td">Antivirus, Firewalls, Penetration, Testing and vulnerability assessment</td>
                </tr>

            </table>
            </div>
            <div id="pdf1">
            <Divider orientation="left"><h4>INCIDENT HANDLING</h4></Divider>
           
            <ol><h5>Three function</h5>
                <li>Incident reporting.</li>
                <li>Incident analysis.</li>
                <li>Incident response.</li>
            </ol>
            <h5>Flowcharts show the processes of handling incident</h5>
            <img src={flow} height={600} width={600}/>
            </div>
            <div id="pdf2">
            <Divider orientation="left"><h4>INCIDENT PROCEDURES</h4></Divider>
            
            <ul><h5>Incident Response Team</h5>
                <li>Contacting incident by email:<a href={`mailto:${plan.team[0]}`}>{plan.team[0]}</a> team or call: {plan.team[1]} </li>
                <li>Report incident in Incident Report Form. </li>
                <li>Analyze the incident data. </li>
                <li>Determine the impact & the effect of the incident. </li>
                <li>Investigation Diagnosis the incident. </li>
                <li>Act appropriately to limit the incident impact and effects. </li>
            </ul>

            
            <Divider orientation="left"><h4>INCIDENT CRITICALITY</h4></Divider>
            <img src={critical} width={700} height={200}/>
            <ul><h5>INCIDENT REPORTING</h5>
                <li>all suspected or actual incidents must be reported by risk management team, using the incident Report form . </li>
                <li>The incident is further classified based on the type of incident. </li>
                <li>full out the report form . </li>
            </ul>
            </div>

            <div id="pdf3">
            <Divider orientation="left"><h4>RECOVERY STRATEGIES:</h4></Divider>
            <h5>1\UNAVAILABILITY OF WORKSTATION & IT PHYSICAL ASSETS</h5>
            <div>For each IT physical asset, a backup replacement with minimum technical requirements should be available</div>
            <div>in a location other than the IT Operation department.</div>
           
            <h5>2\ UNAVAILABILITY OF NETWORK & INTERNET SERVICES</h5>
            <div>IT deanship should arrange to ensure that internet service is available in any failure in the local network </div>
            <div>or the internet service provider by using networks technology or other applicable solutions.</div>
            
            <h5>3\ UNAVAILABILITY OF DATA</h5>
            <div>A backup copy of physical data (i.e. forms, policies, procedures, inventories software CDs) should be available</div>
            <div>in a safe location other than the lIT Operation department and under the same physical security controls.</div>
            <h5>4\ STAFF UNAVAILABILITY</h5>
            <div>A substitute employee should be identified for each key role.</div>
            <div>Each substitute employee should be trained to undertake the responsibilities when required.</div>
            
            <h5>5\ NON-ACCESS TO PREMISES</h5>
            <div>In case of oganization is not accessible for any major threat or incident and IT processes are disrupted for unacceptable time, oganization should be arrange with</div>
            <div>  NCDC to prepare a temporary location to perform IT processes after implementing the minimum security requirements and installing and arrangements including:</div>
<ul><li>New workstation</li><li>Software Applications</li><li>Testing IT operations</li></ul> 
            

</div>
<div id="pdf4">
            <Divider orientation="left"><h4>ESSETIAL RESOURCES</h4></Divider>

            <h5>1\ HUMAN RESOURCES</h5>
            <table className="table" style={{width:'70%'}} >
                <tr className="td">
                    <th className="td">Employee Name</th>
                    <th className="td">Role</th>
                    <th className="td">Email Address</th>
                    <th className="td">Mobile Number</th>
                </tr>
                {plan.human.map(item=>
                <tr className="td">
                    <td className="td">{item[0]}</td>
                    <td className="td">{item[1]}</td>
                    <td className="td">{item[2]}</td>
                    <td className="td">{item[3]}</td>
                </tr>)}
            </table>

            <h5>2\ EQUIPMEMT</h5>
            <table className="table" style={{width:'70%'}} >
                <tr className="td">
                    <th className="td">Equipment</th>
                    <th className="td">Vendor</th>
                    <th className="td">Serial Number</th>
                    <th className="td">Backed Up</th>
                </tr>
                {plan.equipmemt.map(item=>
                <tr className="td">
                    <td className="td">{item[0]}</td>
                    <td className="td">{item[1]}</td>
                    <td className="td">{item[2]}</td>
                    <td className="td">{item[3]}</td>
                </tr>)}
            </table>

            <h5>3\ IT SYSTEM</h5>
            <table className="table" style={{width:'70%'}} >
                <tr className="td">
                    <th className="td">System/ Application</th>
                    <th className="td">Type</th>
                    <th className="td">RTO</th>
                    <th className="td">RPO</th>
                    <th className="td">Backed Up</th>
                </tr>
                {plan.system.map(item=>
                <tr className="td">
                    <td className="td">{item[0]}</td>
                    <td className="td">{item[1]}</td>
                    <td className="td">{item[2]}</td>
                    <td className="td">{item[3]}</td>
                    <td className="td">{item[4]}</td>
                </tr>)}
            </table>
            </div>
            <div id="pdf4">
            <Divider orientation="left"><h4>CONTACT INFORMATION</h4></Divider>
            
            <h5>1\ INTERNAL CONTACTS</h5>


            <table className="table" style={{width:'70%'}} >
                <tr className="td">
                    <th className="td">Employee Name</th>
                    <th className="td">Role</th>
                    <th className="td">Email Address</th>
                    <th className="td">Mobile Number</th>
                </tr>
                {plan.internalContact.map(item=>
                <tr className="td">
                    <td className="td">{item[0]}</td>
                    <td className="td">{item[1]}</td>
                    <td className="td">{item[2]}</td>
                    <td className="td">{item[3]}</td>
                </tr>)}
            </table>
            
            <h5>2\ EXTERNAL CONTACTS</h5>
            <table className="table" style={{width:'70%'}}>
                <tr className="td">
                    <th className="td">Employee Name</th>
                    <th className="td">Role</th>
                    <th className="td">Email Address</th>
                    <th className="td">Mobile Number</th>
                </tr>
                
                {plan.externalContact.map(item=>
                <tr className="td">
                    <td className="td">{item[0]}</td>
                    <td className="td">{item[1]}</td>
                    <td className="td">{item[2]}</td>
                    <td className="td">{item[3]}</td>
                </tr>)}
            </table>
            </div>

        </div>
        )}
    }}
      
    
    const mapStateToProps = (state) => {
      return {
        user: state.user
      }
    }
    
    export default connect(mapStateToProps)(select) ;