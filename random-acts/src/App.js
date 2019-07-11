import React from 'react';

import './App.css';
import ContactList from './components/ContactList';
import ServiceList from './components/ServiceList';
import RandomService from './components/RandomService';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
          
          <ContactList />
          <ServiceList />
      </div>
      <div className='random'>
          <RandomService />
      </div>
    </div>
  );
}

export default App;
