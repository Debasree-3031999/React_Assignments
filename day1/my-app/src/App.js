// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Staticcard from "./components/Staticcard"
import ContactUs from './components/ContactUs';
import Download from './components/Download';
import Help from './components/Help';
import Home from './components/Home';
import JoinUs from './components/JoinUs';
import Login from './components/login';
import Search from './components/Search';
import Settings from './components/Settings';


function App() {
  return (
      <div className='shree'>
      <div className="App">
        <Staticcard/>
        <div className='partII'>
        <ContactUs/>
        <JoinUs/>
        <Settings/>
        <Login/>
        <Search/>
        <Help/>
        <Home/>
        <Download/>

      </div>
      </div>
      
    </div>
  );
}

export default App;
