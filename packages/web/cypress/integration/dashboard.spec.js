describe('dashboard', () => {
  describe('page', () => {
    it('clicking a link goes to the gallery', () => {
      cy.fixture('is-authenticated.json').then(serverState => {
        cy.window().then(window => {
          window.localStorage.setItem('server', JSON.stringify(serverState));
        });
      });
     
      cy.visit(Cypress.env('appEndpoint'));
      cy.contains('Christmas 2016').click();
      cy.url().should('contain', 'gallery');
    });
  })

  describe('action bar', () => {
    it('logs out when you click the logout button', () => {

      cy.fixture('is-authenticated.json').then(serverState => {
        cy.window().then(window => {
          window.localStorage.setItem('server', JSON.stringify(serverState));
        });
      });
      cy.visit(Cypress.env('appEndpoint'));
      cy.get('[title=logout]').click();
      cy.contains('you have successfully logged out');
    });
  })
});