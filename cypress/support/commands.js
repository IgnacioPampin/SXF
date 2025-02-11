// ***********************************************
// commands.js file is used to store re usable custom commands
// ***********************************************

// *************** General use commands *************************
// use different viewports for testing
Cypress.Commands.add('setViewport', (device) => {
    if (device === 'desktop') {
      cy.viewport(1280, 720);
    } else if (device === 'tablet') {
      cy.viewport('ipad-2');
    } else if (device === 'mobile') {
      cy.viewport('iphone-x');
    }
  });


  // *************** Shared pages commands *************************

  // *************** Shopping bag commands *************************

// Custom command to select the shopping bag element
Cypress.Commands.add('getShoppingBag', () => {
  return cy.get('[data-qa-automation="homeShoppingBag"]');
});

// Custom command to select the 'Shop Now' CTA button
Cypress.Commands.add('shopNowCta', () => {
  return cy.get('.Button__Label-sc-ffozwa-1.dtcuCv').contains('Shop Now');
});

// Custom command to close the modal
Cypress.Commands.add('closeSBModal', () => {
  return cy.get('div.CartDrawerHeader__Header-sc-180nwze-0.cnLwxP > button').click();
});

