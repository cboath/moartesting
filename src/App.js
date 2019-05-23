import React, { Component } from 'react';
import './App.css';
import SkillsTracker from './containers/SkillsTracker/SkillsTracker';
import Navbar from './component/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SkillsTracker />
      </div>
    );
  }
}

export default App;
