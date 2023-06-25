Cypress.session.clearCurrentSessionData();

describe('Check focus condition for input UI', () => {
  it('Check focus condition for input UI', () => {
    cy.visit('/');

    // Check name input for focus
    cy.get('#input-3').click().should('be.focused');

    // Check email input for focus
    cy.get('#input-4').click().should('be.focused');

    // Check age input for focus
    cy.get('#input-8').click().should('be.focused');

    // Check reason input for focus
    cy.get('#input-9').click().should('be.focused');
  });
});

describe('Check red highlight condition for failed input fields', () => {
  it(`Check if required fields turn red in failed condition'`, () => {
    cy.visit('/');

    // Get name field temporarily input
    cy.get('#input-3').type('Adam');

    // Submit form
    cy.get('button.button-sc-1ta45yz-0').click();

    cy.reload();

    // Check that all failed inputs are red

    // (Name temp disabled) Check name input for focus
    // cy.get('#input-3').click().should('be.focused');

    // Check email input for red error highlight
    cy.get('#input-4')
      .click()
      .should('have.css', 'border-color')
      .and('eq', 'rgb(255, 0, 0)');

    // Check age input for red error highlight
    cy.get('#input-8')
      .click()
      .should('have.css', 'border-color')
      .and('eq', 'rgb(255, 0, 0)');

    // Check reason input for red error highlight
    cy.get('#input-9')
      .click()
      .should('have.css', 'border-color')
      .and('eq', 'rgb(255, 0, 0)');
  });
});
