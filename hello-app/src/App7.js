import { Component } from 'react';
import './App.css';

import EventPractice from './comp/EventPractice';
import EventPractice2 from './comp/EventPractice2';
import EventPracticeFunc from './comp/EventPracticeFunc';

class App7 extends Component {
  render() {
    return (
      <div className="react">
        {/* <EventPractice /> */}
        <EventPractice2 />
        <EventPracticeFunc />
      </div>
    );
  }
}

export default App7;
