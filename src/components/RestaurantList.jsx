import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <div className="restaurant-list">
      <h2>Restaurants Here</h2>
      <ul>
        <img
          src="images/loading-indicator.svg"
          data-testid="loading-indicator"
          alt="progress spinner"
        />
        {restaurants.map(restaurant => {
          return <li key={restaurant.id}>{restaurant.name}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
