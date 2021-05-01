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
  const renderWithProps = (propOverrides = {}) => {
    const props = {
      loadRestaurants: jest.fn().mockName('loadRestaurants'),
      restaurants,
      ...propOverrides,
    };
    loadRestaurants = props.loadRestaurants;
    context = render(<RestaurantList {...props} />);
  };

  it('loads restaurants on initial render', () => {
    renderWithProps();
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays the restaurants', () => {
    renderWithProps();
    const {queryByText} = context;
    expect(queryByText('Sushi Place')).not.toBeNull();
    expect(queryByText('Pizza Place')).not.toBeNull();
  });

  it('displays the loading indicator while loading', () => {
    renderWithProps({loading: true});
    const {queryByTestId} = context;

    expect(queryByTestId('loading-indicator')).not.toBeNull();
  });
});
