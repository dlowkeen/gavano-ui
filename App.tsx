import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import AppNavigation from './src/navigation/AppNavigator';
import rootReducer from './src/reducers';
import 'react-native-gesture-handler';

const initialState = {};

const middleware = [ReduxThunk, logger];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
