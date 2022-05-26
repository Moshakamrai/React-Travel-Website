
import React from 'react';
import BackGround from './components/BackGround';
import Carousel from './components/Carousel';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Select from './components/Select';

function App() {
  return (
    <div >
      <Navbar/>  
      <BackGround/>
      <Destinations/>
      <Search/>
      <Select/>
      <Carousel/>
      <Footer/>
    </div>
    
  );
}

export default App;
