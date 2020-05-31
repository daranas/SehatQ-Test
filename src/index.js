import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import Routes from './routes';
import { createUseStyles } from 'react-jss';

// style
import 'semantic-ui-css/semantic.min.css';

const useStyles = createUseStyles({
  mainWrapper: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 560,
    minHeight: '100vh',
    background: '#ffffff',
    padding: '0 15px 70px',
    borderLeft: '1px solid #eee',
    borderRight: '1px solid #eee'
  },
  '@media only screen and (max-width: 767px)': {
    mainWrapper: {
      paddingLeft: 0,
      paddingRight: 0,
      border: 0
    }
  }
});

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <div className={useStyles().mainWrapper}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  </Provider>
);
render(
  <Root />,
  document.getElementById('root')
);
serviceWorker.unregister();
