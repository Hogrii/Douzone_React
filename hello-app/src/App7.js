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
        <EventPractice2 ref={(ref) => (this.eventObj1 = ref)} />
        <EventPractice2 ref={(ref) => (this.eventObj2 = ref)} />
        <EventPracticeFunc />
        <button onClick={(e) => this.eventObj1.add(10, 20)}></button>
      </div>
    );
  }
}

export default App7;
