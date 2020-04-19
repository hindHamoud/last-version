import React, { Suspense,Component } from 'react';
import { Route,Switch} from "react-router-dom";
import Auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.jsx";
import RegisterPage from "./views/LoginPage/RegisterPage.jsx";
import NavBar from "./views/NavBar/NavBar";

import Reports from './views/report/select'
import Report from './views/report/incident'
import Error404 from './views/LandingPage/error404'
import Profile  from './views/LoginPage/prfile'
import Plan  from './views/plan/plan'
import Try from './try'
import 'react-chat-widget/lib/styles.css';



class App extends Component{
  
  render() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/plan" component={Auth(Plan , true)} />
          <Route exact path="/try" component={Auth(Try , null)} />
          <Route exact path="/reports" component={Auth(Reports , true)} />
          <Route exact path="/profile" component={Auth(Profile , true)} />
          
          <Route exact path="/report" component={Auth(Report , true)} />
          <Route exact path="*" component={Auth(Error404, null)}/>
        </Switch>
      </div>
    </Suspense>
  ); }}

export default App;
