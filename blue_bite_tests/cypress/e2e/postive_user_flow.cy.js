const {
  testData1,
  testData2,
  testData3,
  testData4,
} = require('../../data/positive_flow_data.js');

Cypress.session.clearCurrentSessionData();

describe('Validate positive user flow once (no reason param)', () => {
  testData1.forEach((data, index) => {
    it(`Test ${index + 1}: Submit valid input; return count`, () => {
      cy.visit('/');

      // Get name input, type into it
      cy.get('#input-3').type(data.name);

      // Get email input, type into it
      cy.get('#input-4').type(data.email);

      // Get age input, type into it
      cy.get('#input-8').type(data.age);

      // Submit form
      cy.get('button.button-sc-1ta45yz-0').click();

      cy.get('div.snippet__Body-sc-12bo3rm-0.cmpVnN strong')
        .invoke('text')
        .should('eq', String(index + 1));

      if (index !== testData1.length - 1) {
        cy.reload();
      } else {
        cy.clearCookies();
        cy.clearLocalStorage();
      }
    });
  });
});

describe('Validate positive user flow once with optional reason param', () => {
  testData1.forEach((data, index) => {
    it(`Test ${index + 1}: Submit valid input; return count 1`, () => {
      cy.visit('/');

      // Get name input, type into it
      cy.get('#input-3').type(data.name);

      // Get email input, type into it
      cy.get('#input-4').type(data.email);

      // Get age input, type into it
      cy.get('#input-8').type(data.age);

      // Get Reason input, type into it
      cy.get('#input-9').type(data.reason);

      // Submit form
      cy.get('button.button-sc-1ta45yz-0').click();

      cy.get('div.snippet__Body-sc-12bo3rm-0.cmpVnN strong')
        .invoke('text')
        .should('eq', String(index + 1));

      if (index !== testData1.length - 1) {
        cy.reload();
      } else {
        cy.clearCookies();
        cy.clearLocalStorage();
      }
    });
  });
});

describe('Validate positive user flow with age boundary conditions', () => {
  testData3.forEach((data, index) => {
    it(`Test ${index + 1}: Submit valid input; return count`, () => {
      cy.visit('/');

      // Get name input, type into it
      cy.get('#input-3').type(data.name);

      // Get email input, type into it
      cy.get('#input-4').type(data.email);

      // Get age input, type into it
      cy.get('#input-8').type(data.age);

      // Get Reason input, type into it
      cy.get('#input-9').type(data.reason);

      // Submit form
      cy.get('button.button-sc-1ta45yz-0').click();

      cy.get('div.snippet__Body-sc-12bo3rm-0.cmpVnN strong')
        .invoke('text')
        .should('eq', String(index + 1));

      if (index !== testData3.length - 1) {
        cy.reload();
      } else {
        cy.clearCookies();
        cy.clearLocalStorage();
      }
    });
  });
});

describe('Validate positive user flow with twenty five submissions', () => {
  testData4.forEach((data, index) => {
    it(`Test ${index + 1}: Submit valid input; return count 1`, () => {
      cy.visit('/');

      // Get name input, type into it
      cy.get('#input-3').type(data.name);

      // Get email input, type into it
      cy.get('#input-4').type(data.email);

      // Get age input, type into it
      cy.get('#input-8').type(data.age);

      // Get Reason input, type into it
      cy.get('#input-9').type(data.reason);

      // Submit form
      cy.get('button.button-sc-1ta45yz-0').click();

      cy.get('div.snippet__Body-sc-12bo3rm-0.cmpVnN strong')
        .invoke('text')
        .should('eq', String(index + 1));

      if (index !== testData4.length - 1) {
        cy.reload();
      } else {
        cy.clearCookies();
        cy.clearLocalStorage();
      }
    });
  });
});
