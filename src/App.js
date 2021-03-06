import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';

function App() { 
  return (
    <div className="App">
        <Router>
          <Nav />
          <Route component={About} exact path="/about"/> 
          <Route component={Contact} exact path="/contact"/>
          <Route component={Project} exact path="/project"/>
          <Route component={Resume} exact path="/resume"/>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;