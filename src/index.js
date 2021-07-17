import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from './State/StateProvider';
import { initalState, reducer } from './State/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initalState={initalState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
