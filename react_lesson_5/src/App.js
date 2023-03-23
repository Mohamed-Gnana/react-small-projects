import React from 'react';
import { BrowserRouter , Route , Switch } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Dash from "./components/dashbourd/dashbourd";
import ProjectDetail from "./components/projects/projectdetail";
import SigningIn from "./components/auth/signin";
import SigningUp from "./components/auth/signup";
import CreateProject from "./components/projects/createproject";
import { connect } from 'react-redux';

function App(props) {
  if (!props.authIsLoaded) {
    return (
      <div className = "center grey-text text-darken-3">
        <p>Waiting for Database Initailization</p>
      </div>
    )
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path = "/" component = {Dash}/>
          <Route exact path = "/signin" component = {SigningIn} />
          <Route exact path = "/signup" component = {SigningUp} />
          <Route exact path = "/addproject" component = {CreateProject} />
          <Route path = "/:project_id" component = {ProjectDetail}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    authIsLoaded : state.firebase.auth && state.firebase.auth.isLoaded
  }
}

export default connect(mapStateToProps)(App);
