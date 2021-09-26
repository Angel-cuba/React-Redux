import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import App from './App';

import reducers from './reducers/index'


const store = createStore(reducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
    <App /> 
</Provider>
 
,  document.getElementById('root'));


//<React.StrictMode> </React.StrictMode>
// Note that StrictMode is a tool for highlighting potential problems in a React application. It activates additional checks and warnings such as:

// Identifying components with unsafe lifecycles
// Warning about legacy string ref API usage
// Warning about deprecated findDOMNode usage
// Detecting unexpected side effects
// Detecting legacy context API
// Strict mode checks are run in development mode only; they do not impact the production build.