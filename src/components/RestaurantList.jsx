import React, {useEffect} from 'react';

export const RestaurantList = ({loadRestaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <div className="restaurant-list">
      <h3>Restaurants Here</h3>
    </div>
  );
};

export default RestaurantList;
