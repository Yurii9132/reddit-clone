import React from 'react';
import logo from '../logo.svg';
import { Counter } from '../features/counter/Counter';
import '../styles/App.css';
import  SideNav  from '../components/sideNav/SideNav'
import  Main  from '../components/main/Main'


function App() {
  return (
    <div className="App">
      <div className='App_container'>
        <SideNav />
        <Main />
      </div>
    </div>
  );
}

export default App;
