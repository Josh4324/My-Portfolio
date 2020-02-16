import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </div>
  );
}

export default App;
