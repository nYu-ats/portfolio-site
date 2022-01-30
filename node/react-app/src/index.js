import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from'./Header'
import Top from './Top'
import About from './About'
import Work from './Work'
import Skill from './Skill'
import Contact from './Contact'
import Footer from './Footer'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Top />
    <About />
    <Work />
    <Skill />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
