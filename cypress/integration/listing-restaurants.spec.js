require('dotenv').config();

describe('Listing Restaurants', () => {
  it('shows restauarants from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';
    const API_KEY = Cypress.env('API_KEY');

    cy.server({force404: true});

    cy.route({
      method: 'GET',
      url: `https://outside-in-dev-api.herokuapp.com/${API_KEY}/restaurants`,
      response: [
        {id: 1, name: sushiPlace},
        {id: 2, name: pizzaPlace},
      ],
    });

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
