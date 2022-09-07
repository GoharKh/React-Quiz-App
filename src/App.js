import { useState } from 'react';

import {ThemeContext, themes} from './components/theme/theme-context';
import Wrapper from './Wrapper';

const App = () => {
  const [theme, setTheme] = useState(themes.dark)
  
  const changeTheme = () => {
    setTheme(
          theme === themes.dark
          ? themes.light
          : themes.dark,
    );
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Wrapper changeTheme={changeTheme} />
    </ThemeContext.Provider>
  );
}

export default App;