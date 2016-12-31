import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { faderVisibility } from './reducers'
import App from './modules/App'
import './build/css/index.css'

let store = createStore(combineReducers({
  faderVisibility 
}))

const config = { 
  height: "500px"
}

ReactDOM.render(
  <Provider store={store}>
    <App config={config}/>
  </Provider>,
  document.getElementById('root')
);
