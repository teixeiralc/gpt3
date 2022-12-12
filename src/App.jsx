import React from 'react';
import {
  Blog,
  Features,
  Footer,
  Hero,
  Possibility,
  WhatGPT3,
} from './Containers';
import { Brand, CallToAction, NavBar } from './components';

import './assets/App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Hero />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CallToAction />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
