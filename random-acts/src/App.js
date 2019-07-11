import React from 'react';

import './App.css';
import ContactList from './components/ContactList';
import ServiceList from './components/ServiceList';
import RandomService from './components/RandomService';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import OurTeam from './components/OurTeam';


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
