import React, {Component} from 'react';
import Accordion from './state-drills/Accordion';
import './App.css';

import sections from './state-drills/accordion-sections';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion sections={sections}/>
      </div>
    );
  }
}

export default App;
