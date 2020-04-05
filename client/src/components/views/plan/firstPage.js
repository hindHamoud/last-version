import React, { Component } from 'react'
import { Layout,Content,Drawer, Navigation} from "react-mdl";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import Incident from './incident'
import Plan from './plan'
import { Container, Row } from "react-bootstrap";


export class choose extends Component {
  constructor() {
    super()
    this.state = {
      incident: '',
    current:0}
      
}

    render() {
    
    return(
        
      <div style={{ height: "calc(100vh - 60px)", position: "relative" }}>
 <Router>
<Layout fixedDrawer>
<Drawer title="Incidents">
            <Navigation>     
<Link to="/plan/External-or-Internal-Fire" onClick={()=>{this.setState({incident:'External or Internal Fire'})}}> External or Internal Fire</Link>
<Link to="/plan/Electricity-interruption" onClick={()=>{this.setState({incident:'Electricity interruption'})}}> Electricity interruption</Link>
<Link to="/plan/Epidemic-Pandemic" onClick={()=>{this.setState({incident:'Epidemic, pandemic'})}}>Epidemic, pandemic</Link>
<Link to="/plan/computer-attack" onClick={()=>{this.setState({incident:'Computer attack'})}}>Computer attack </Link>
</Navigation>
          </Drawer>
          <Content>
            <Switch>
            <Route exact path="/plan/" component={Plan} />
              <Route path="/plan/External-or-Internal-Fire">
                <Container>
                  <Row>
                  <Incident incident={this.state.incident} current={0} update={1}/>
                  </Row>
                </Container>
              </Route>
              <Route path="/plan/Electricity-interruption">
                <Container>
                  <Row>
                  <Incident incident={this.state.incident} current={0} update={2}/>
                  </Row>
                </Container>
              </Route>
              <Route path="/plan/Epidemic-Pandemic">
                <Container>
                  <Row>
                  <Incident incident={this.state.incident} current={0} update={3}/>
                  </Row>
                </Container>
              </Route>
              <Route path="/plan/computer-attack">
                <Container>
                  <Row>
                  <Incident incident={this.state.incident} current={0} update={4}/>
                  </Row>
                </Container>
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
        </div>
    )}}
  
  
  export default choose;