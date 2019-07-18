import React from 'react';

import './App.css';
import ContactsPage from './views/ContactsPage';
import ServicesPage from './views/ServicesPage';
import RandomActsPage from './views/RandomActsPage';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';


class App extends React.Component {

  

  render() {
  return (
 

      <div className="App">
        <Route path="/" render={props =>  <NavBar {...props} />} />
        <Route path="/contacts" render={props =>  <ContactsPage {...props} />} />
        <Route path="/services" render={props =>  <ServicesPage {...props} />} />
        <Route path="/random-acts" render={props =>  <RandomActsPage {...props} />} />
        <Route path="/random-service" render={props =>  <ContactsPage {...props} />} />
      </div>

  );
} }

export default App;


