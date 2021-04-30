import {render} from '@testing-library/react';
import {RestaurantList} from '../components/RestaurantList';
import React from 'react';

describe('RestaurantList', () => {
  it('loads restaurants on initial render', () => {
    const loadRestaurants = jest.fn().mockReturnValue(42);

    render(<RestaurantList loadRestaurants={loadRestaurants} />);
    expect(loadRestaurants).toHaveBeenCalled();
  });
});
