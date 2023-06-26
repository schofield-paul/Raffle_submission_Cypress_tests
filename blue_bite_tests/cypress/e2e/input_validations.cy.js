const {
  testData1,
  testData2,
  testData3,
  testData4,
} = require('../../data/input_validations_data.js');

Cypress.session.clearCurrentSessionData();

describe('Validate errors with bad age inputs', () => {
  testData1.forEach((data, index) => {
    it(`Test ${index + 1}: Submit valid input; return count 1`, () => {
      cy.visit('/');

      // Get name input, type into it
      cy.get('#input-3').type(data.name);

      // Get email input, type into it
      cy.get('#input-4').type(data.email);

      // Get age input, type into it
      if (index !== testData1.length - 1) {
        // Not the last iteration, type the age input
        cy.get('#input-8').type(data.age);
      }

      // Submit form
      cy.get('button.button-sc-1ta45yz-0').click();

      cy.contains(
        'div.snippet__Body-sc-12bo3rm-0.cmpVnN',
        'Must be 18 or older to enter.'
      ).should('be.visible');

      if (index !== testData1.length - 1) {
        cy.reload();
      }
    });
  });
});

describe('Validate errors with bad email inputs', () => {
  testData2.forEach((data, index) => {
    it(`Test ${index + 1}: Submit valid input; return count 1`, () => {
      cy.visit('/');

      // Get name input, type into it
      cy.get('#input-3').type(data.name);

      // Get email input, type into it
      cy.get('#input-4').type(data.email);

      // Get age input, type into it
      // Not the last iteration, type the age input
      cy.get('#input-8').type(data.age);

      // Submit form
      cy.get('button.button-sc-1ta45yz-0').click();

      // update error message as needed
      cy.contains(
        'div.snippet__Body-sc-12bo3rm-0.cmpVnN',
        'Please enter a valid email'
      ).should('be.visible');

      if (index !== testData2.length - 1) {
        cy.reload();
      }
    });
  });
});

describe('Validate errors with bad name inputs', () => {
  testData3.forEach((data, index) => {
    it(`Test ${index + 1}: Submit valid input; return count 1`, () => {
      cy.visit('/');

      // Get name input, type into it if not the last iteration
      if (index !== testData3.length - 1) {
        cy.get('#input-3').type(data.name);
      }

      // Get email input, type into it
      cy.get('#input-4').type(data.email);

      // Get age input, type into it
      // Not the last iteration, type the age input
      cy.get('#input-8').type(data.age);

      // Submit form
      cy.get('button.button-sc-1ta45yz-0').click();

      if (data.name === '') {
        // Check if the button is not disabled after clicking
        cy.get('button.button-sc-1ta45yz-0').should('not.be.disabled');
      } else {
        // update error message as needed
        cy.contains(
          'div.snippet__Body-sc-12bo3rm-0.cmpVnN',
          'Please enter a valid name'
        ).should('be.visible');
      }

      if (index !== testData3.length - 1) {
        cy.reload();
      }
    });
  });
});

describe('Validate errors with combinations of bad input', () => {
  testData4.forEach((data, index) => {
    it(`Test ${index + 1}: Submit valid input; return count 1`, () => {
      cy.visit('/');

      // TOGGLE CHECK AS NEEDED -- curr test valid name with no email
      cy.get('#input-3').type(data.name);

      // Get email input, type into it
      //cy.get('#input-4').type(data.email);

      // Get age input, type into it
      // Not the last iteration, type the age input
      cy.get('#input-8').type(data.age);

      // Get Reason input, type into it
      // cy.get('#input-9').type(data.reason);

      // Submit form
      cy.get('button.button-sc-1ta45yz-0').click();

      cy.contains(
        'div.snippet__Body-sc-12bo3rm-0.cmpVnN',
        'Please enter a valid email'
      ).should('be.visible');

      if (index !== testData4.length - 1) {
        cy.reload();
      }
    });
  });
});
