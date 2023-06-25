const {
  testData1,
  testData2,
  testData3,
  testData4,
} = require('../../data/positive_flow_data.js');

Cypress.session.clearCurrentSessionData();

// describe('Check for repposting request with back button on browser', () => {
//   testData1.forEach((data, index) => {
//     it(`Test ${index + 1}: Check for reposting request upon backspace`, () => {
//       cy.visit('/');

//       // Get name input, type into it
//       cy.get('#input-3').type(data.name);

//       // Get email input, type into it
//       cy.get('#input-4').type(data.email);

//       // Get age input, type into it
//       cy.get('#input-8').type(data.age);

//       // Get Reason input, type into it
//       cy.get('#input-9').type(data.reason);

//       // Submit form
//       cy.get('button.button-sc-1ta45yz-0').click();

//       cy.go(-1);

//       if (index !== testData1.length - 1) {
//         cy.reload();
//       }
//     });
//   });
// });
