// src/App.js
import React from 'react';
import Navbar from './components/header/Navbar';
import Middle from './components/middle/Middle';
import Footer from './components/footer/Footer';
// import HeroSection from './components/hero/HeroSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <Middle />
      <Footer />
      {/* <HeroSection /> */}
    </div>
  );
}

export default App;
