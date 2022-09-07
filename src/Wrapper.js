import { useContext } from 'react';

import { ThemeContext } from './components/theme/theme-context';
import UserLog from './components/UserLog';

import img from './images/brain.png';

const Wrapper = ({changeTheme}) => {
  const {background, color} = useContext(ThemeContext);
  return (
          <div className='wrapper' style={{background: background, color: color}}>
            <button className={background === '#222222' ? 'theme-switcher dark' : 'theme-switcher light' } onClick={changeTheme}>Change theme mode</button>
            <div className="container">
              <div className="title">
                <img src={img} alt='/' width='80px'/>
                <h1>Let's Play</h1>
                <div className="underline"></div>
              </div>
              <UserLog />
            </div>
          </div>
        )
}

export default Wrapper;