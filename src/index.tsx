import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './routes/App';

import registerServiceWorker from './registerServiceWorker';
import parse from './utils/parse';

import wordplay from './example/wordplay.json';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
parse(wordplay);

