import React from 'react';
import {Provider} from 'react-redux';
import store from '../store/store';

// App Imports //
import RestaurantScreen from './RestaurantScreen';

const App = () => (
  <Provider store={store}>
    <RestaurantScreen className="app" />
  </Provider>
);

export default App;
