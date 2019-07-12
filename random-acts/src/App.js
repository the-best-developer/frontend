import React from 'react';
import ContactsPage from './views/ContactsPage';
import ServicesPage from './views/ServicesPage';
import RandomActsPage from './views/RandomActsPage';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import styled from 'styled-components'

const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: linear-gradient(to top, rgb(23, 29, 34) 20%,rgb(47, 89, 105) 100%);
    text-align: center;
    color: lightgrey;
`;

function App() {
  return (
      <MainContainer className="App">
        <Route path="/" render={props =>  <NavBar {...props} />} />
        <Route path="/contacts" render={props =>  <ContactsPage {...props} />} />
        <Route path="/services" render={props =>  <ServicesPage {...props} />} />
        <Route path="/random-acts" render={props =>  <RandomActsPage {...props} />} />
        <Route path="/random-service" render={props =>  <ContactsPage {...props} />} />
      </MainContainer>
  );
}

export default App;
