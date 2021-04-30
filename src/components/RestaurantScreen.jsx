import React from 'react';
import RestaurantList from './RestaurantList';

const RestaurantScreen = () => {
  const loadRestaurants = () => 'hello world';

  return (
    <div className="restaurant-screen">
      <h2>Restaurants</h2>
      <RestaurantList loadRestaurants={loadRestaurants}></RestaurantList>
    </div>
  );
};

export default RestaurantScreen;
