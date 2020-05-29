import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';

// style
import 'semantic-ui-css/semantic.min.css';

const Root = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
render(
  <Root />,
  document.getElementById('root')
);
serviceWorker.unregister();
