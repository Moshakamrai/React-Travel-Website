
import React from 'react';
import BackGround from './components/BackGround';
import Destinations from './components/Destinations';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div >
      <Navbar/>  
      <BackGround/>
      <Destinations/>
      <Search/>
      
    </div>
    
  );
}

export default App;
