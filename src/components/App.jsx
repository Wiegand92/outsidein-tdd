import React from 'react';
import {Provider} from 'react-redux';
import store from '../store/store';

// App Imports //
import RestaurantScreen from './RestaurantScreen';

const App = () => (
  <Provider className="app" store={store}>
    <p>here</p>
    {/* <RestaurantScreen /> */}
  </Provider>
);

export default App;
