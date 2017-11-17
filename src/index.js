import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

// React e Redux
import registerServiceWorker from './registerServiceWorker';
import {createStore } from 'redux';
import { Provider } from 'react-redux';

// Testando o Field
 import reducers from './main/reducers'
 
 const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

        

registerServiceWorker();