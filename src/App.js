import { PureComponent } from 'react';

import UserLog from './components/UserLog';

import img from './images/brain.png';

class App extends PureComponent {

  render() {
    return (
      <div className="container">
        <div className="title">
          <img src={img} alt='/' width='80px'/>
          <h1>Let's Play</h1>
          <div className="underline"></div>
        </div>
        <UserLog />
      </div>
    );
  };
};

export default App;