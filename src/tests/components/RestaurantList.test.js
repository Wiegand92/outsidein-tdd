import {render} from '@testing-library/react';
import {RestaurantList} from '../../components/RestaurantList';
import React from 'react';

describe('RestaurantList', () => {
  let loadRestaurants;
  let context;
  const noop = () => {};
  const restaurants = [
    {id: 1, name: 'Sushi Place'},
    {id: 2, name: 'Pizza Place'},
  ];

  beforeEach(() => {
    loadRestaurants = jest.fn().mockReturnValue(42);
    context = render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
  });

  it('loads restaurants on initial render', () => {
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays the restaurants', () => {
    const {queryByText} = context;
    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });
});
