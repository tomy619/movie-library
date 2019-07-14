import React from 'react';
import './App.css';

import MediaLibrary from './components/MediaLibrary/mediaLibrary'


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './store/reducers/mediaReducer'

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MediaLibrary></MediaLibrary>
      </div>
    </Provider>

  );
}

export default App;
