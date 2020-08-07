import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route,useLocation} from 'react-router-dom';

import './App.css';

import NavBar from './nav-bar';
import Footer from './Components/Footer/footer';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Home from  './Components/Home/Home'



function App() {
  
  return (
    <Router>
      <div className="App">
        <NavBar location= "{this.props.location}" />
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/portfolio" component={Portfolio} />

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
