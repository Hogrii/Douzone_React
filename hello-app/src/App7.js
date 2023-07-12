import { Component } from 'react';
import './App.css';

import EventPractice from './comp/EventPractice';
import EventPracticeFunc from './comp/EventPracticeFunc';

class App7 extends Component {
  render() {
    return (
      <div className="react">
        {/* <EventPractice /> */}
        <EventPracticeFunc />
      </div>
    );
  }
}

export default App7;
