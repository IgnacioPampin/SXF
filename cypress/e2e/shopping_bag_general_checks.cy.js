describe('Shopping Bag General Checks', () => {
  // Run the test on different screen sizes
  const devices = ['mobile', 'desktop', 'tablet'];

  devices.forEach((device) => {
    context(`Running on ${device}`, () => {
      beforeEach(() => {
        cy.setViewport(device); // Set the viewport
        cy.clearCookies(); // Clear cookies before each test

        // Ignore all uncaught exceptions
        cy.on('uncaught:exception', (err, runnable) => {
          // Prevent Cypress from failing the test
          return false;
        });
      });

      it('should display the shopping bag correctly at home page', () => {
        cy.visit(Cypress.env('dynamic_url')); // Change to the appropriate URL
        // Wait for the page to load by checking for a specific element
        cy.getShoppingBag().should('be.visible');
        // check cart for empty state
        cy.getShoppingBag()
          .should('be.visible')
          .contains('span', '(0)');
        if (device === 'desktop') {
          cy.getShoppingBag().contains('span', 'Cart');
        }
      });

      // Open cart for empty state and check it is displayed as expected
      it('should open and display the shopping bag correctly when empty', () => {
        cy.visit(Cypress.env('dynamic_url')); // Change to the appropriate URL
        // Wait for the page to load by checking for a specific element
        cy.getShoppingBag().should('be.visible');
        cy.getShoppingBag().click();
        cy.get('[data-autotag="mini-cart-empty-title"]')
          .should('be.visible')
          .contains('span', 'Your bag is empty');
        // Click on the 'Shop Now' CTA button
        cy.shopNowCta().click();
        // Check if the user is redirected to the correct page
        cy.url().should('include', '/features/best-sellers');
        cy.log('CTA verified: Shop Now');
        cy.log('URL verified: User is redirected to /features/best-sellers');
        // Test Close modal cta
        cy.getShoppingBag().click();
        cy.closeSBModal();
        cy.log('CTA verified: Close modal');
      });
    });
  });
});