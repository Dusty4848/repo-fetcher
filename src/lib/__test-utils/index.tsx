/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { appReducer } from '../store';
import { theme } from '../theme';

function render(
  ui: ReactElement,
  initialStore = {},
  renderOptions = {},
  options = { applyTheme: true, applyRouter: true, applyRedux: true },
) {
  const store = createStore(appReducer, initialStore, applyMiddleware(thunk));
  const { applyTheme, applyRouter, applyRedux } = options;

  function Wrapper({ children }: { children: ReactElement }) {
    if (applyTheme && applyRouter && applyRedux) {
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Router>{children}</Router>
          </ThemeProvider>
        </Provider>
      );
    }

    if (applyTheme && applyRouter && !applyRedux) {
      return (
        <ThemeProvider theme={theme}>
          <Router>{children}</Router>
        </ThemeProvider>
      );
    }

    if (applyTheme && !applyRouter && applyRedux) {
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
      );
    }

    if (!applyTheme && applyRouter && applyRedux) {
      return (
        <Provider store={store}>
          <Router>{children}</Router>
        </Provider>
      );
    }

    if (applyTheme && !applyRouter && !applyRedux) {
      return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    }

    if (!applyTheme && applyRouter && !applyRedux) {
      return <Router>{children}</Router>;
    }

    if (!applyTheme && !applyRouter && applyRedux) {
      return <Provider store={store}>{children}</Provider>;
    }

    return { children };
  }

  return rtlRender(ui, { wrapper: Wrapper as React.ComponentType, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
