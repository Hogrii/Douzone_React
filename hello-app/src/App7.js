import { Component } from 'react';
import './App.css';

import EventPractice from './comp/EventPractice';
import EventPractice_func from './comp/EventPractice_func';

class App7 extends Component {
  render() {
    return (
      <div className="react">
        <EventPractice />
        <EventPractice_func />
      </div>
    );
  }
}

export default App7;
