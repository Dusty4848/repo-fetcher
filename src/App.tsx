import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from './lib/store';
import { theme } from './lib/theme';

import { RepoFinderPage } from './pages/RepoFinderPage';

export const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path={['/:username', '/']} component={RepoFinderPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
