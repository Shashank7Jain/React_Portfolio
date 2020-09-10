import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./nav-bar";
import Footer from "./Components/Footer/footer";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <ScrollToTop>
        <Switch>
          
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/portfolio" exact component={Portfolio} />
        </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
