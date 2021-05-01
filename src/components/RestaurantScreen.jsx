import React from 'react';
import RestaurantList from './RestaurantList';

const RestaurantScreen = () => {
  const loadRestaurants = () => 'hello world';

  return (
    <div className="restaurant-screen">
      <header>
        <h1>Opinion Ate</h1>
      </header>

      <div className="list">
        <RestaurantList loadRestaurants={loadRestaurants} />
      </div>
    </div>
  );
};

export default RestaurantScreen;
