import { PureComponent } from 'react';

import {ThemeContext, themes} from './components/theme/theme-context';
import Wrapper from './Wrapper';

class App extends PureComponent {
  state = {
    theme: themes.dark,
  }
  changeTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Wrapper changeTheme={this.changeTheme} />
      </ThemeContext.Provider>
    );
  }
}

export default App;