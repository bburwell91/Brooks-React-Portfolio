import React from 'react';
import './App.css';
import HomeNav from './components/HomeNav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SocialNav from './components/SocialNav';

function App() {
  return (
    <div id="container">
      <HomeNav />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <SocialNav />
    </div>
  );
}

export default App;
