import {createContext} from 'react';
import UserLog from './components/UserLog';

import img from './images/brain.png';

const ThemeContext = createContext('light')

const App = () => (
  <div className="container">
    <div className="title">
      <img src={img} alt='/' width='80px'/>
      <h1>Let's Play</h1>
      <div className="underline"></div>
    </div>
    <ThemeContext.Provider value='dark'>
      <UserLog />
    </ThemeContext.Provider>
  </div>
);

export default App;