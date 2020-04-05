import React from 'react';

import { INCIDENT_SERVER} from '../../Config'
import { Route, Switch, BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import {connect} from "react-redux";
import { Layout, Drawer, Navigation, Content,Button } from "react-mdl";
import { Container, Row } from "react-bootstrap";
import { CommentOutlined, UserOutlined,ReconciliationOutlined } from "@ant-design/icons";
import Report from './report'

  class select extends React.Component {

    constructor(props){
      super(props);
      this.state = {
          isLoading: false,
          reports: [] ,
        id:''  } }


componentDidMount = () => {
  fetch(`${INCIDENT_SERVER}/`)
  .then(res=>res.json())
  .then(json=>{
    this.setState({
      isLoading:true,
      reports:json,})
  }) }
     

    render(){
      const{isLoading,reports}=this.state;
      
      if(!isLoading){
        return <div>loading ....</div>
      }else {return (
        
          <div style={{ height: "calc(100vh - 60px)", position: "relative" }}>
              <Router>
              
          
            <Layout fixedDrawer >

              <Drawer title="My Reports" >
                <Navigation>
                {reports.map(report=>{if(this.props.user.userData._id === report.admin)
               return(
                  <Link to={`/reports/${report._id}`} key={report._id} onClick={()=>this.setState({id:report._id})} >
                  {report.incidentName}
                 <div style={{fontSize:'10px'}}>-{report.date}-</div> 
                  </Link>)})}
                </Navigation>
              </Drawer>
              <Content>
                <Switch>
                  <Route path={`/reports/${this.state.id}`}>
                    <Container>
                      
                      <Report id={this.state.id}/>
    
                    </Container>
                  </Route>
                </Switch>
              </Content>
            </Layout>
              </Router>
        </div>
      );
    }}}
    const mapStateToProps = (state) => {
      return {
        user: state.user
      }
    }
    
    export default connect(mapStateToProps)(select) ;