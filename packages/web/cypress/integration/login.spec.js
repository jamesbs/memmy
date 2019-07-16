describe('Login page', () => {
  it('login button goes to dashboard', () => {
    cy.visit(Cypress.env('appEndpoint'));
    cy.contains('Login').click();
    cy.url().should(value => {
      expect(value).to.equal(Cypress.env('appEndpoint')+'/');
    });
    cy.contains('memmy');
  });
});