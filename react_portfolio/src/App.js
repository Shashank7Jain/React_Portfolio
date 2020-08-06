import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import NavBar from './nav-bar';
import Footer from './Components/Footer/footer';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
