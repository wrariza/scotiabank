describe('Testing the hero list page', function() {
  it('should contain the word Angular', function() {
    cy.visit('http://localhost:4200')
    cy.contains('Angular')
  })
})
