import React, {useEffect} from 'react';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <div className="restaurant-list">
      <h3>Restaurants Here</h3>
      <ul>
        {restaurants.map(restaurant => {
          return <li key={restaurant.id}>{restaurant.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantList;
