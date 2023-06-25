const testData = require('../../data/testData.js');

Cypress.session.clearCurrentSessionData();

describe('Validate positive user flow once', () => {
  testData.forEach((data, index) => {
    it(`Test ${index + 1}: clicks the link "type"`, () => {
      cy.visit('/');

      // Get name input, type into it
      cy.get('#input-3').type(data.name);

      // Get email input, type into it
      cy.get('#input-4').type(data.email);

      // Get email input, type into it
      cy.get('#input-8').type(data.age);

      // Submit form
      cy.get('button.button-sc-1ta45yz-0').click();

      cy.get('div.snippet__Body-sc-12bo3rm-0.cmpVnN strong')
        .invoke('text')
        .should('eq', String(index + 1));

      if (index !== testData.length - 1) {
        cy.reload();
      }
    });
  });
});
