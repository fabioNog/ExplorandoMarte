import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

// Testando o Field
// import counterReducer from './TesteRedux/counterReducer'
// import Counter from './TesteRedux/counter'

// const reducers = combineReducers({
//      counter: counterReducer 
// })

ReactDOM.render(
    // <Provider store={createStore(reducers)}>
    //     <Counter />
    // </Provider>, document.getElementById('root'));
    <App/>,document.getElementById('root'));
        

registerServiceWorker();