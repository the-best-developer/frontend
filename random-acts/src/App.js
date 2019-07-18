import React from 'react';

import './App.css';
import ContactsPage from './views/ContactsPage';
import ServicesPage from './views/ServicesPage';
import RandomActsPage from './views/RandomActsPage';
import NavBar from './components/NavBar';
import OurTeam from './components/OurTeam';
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <Route exact path="/" render={props =>  <Home {...props} />} />
        <Route path="/" render={props =>  <NavBar {...props} />} />
        <Route path="/contacts" render={props =>  <ContactsPage {...props} />} />
        <Route path="/services" render={props =>  <ServicesPage {...props} />} />
        <Route path="/random-acts" render={props =>  <RandomActsPage {...props} />} />
        <Route path="/team" render={props =>  <OurTeam {...props} />} />
        <Route path="/signup" render={props =>  <SignUp {...props} />} />
        <Route path="/login" render={props =>  <Login {...props} />} />
      </div>
  );
}

export default App;
