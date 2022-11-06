import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </>
  );
};

export default App;
