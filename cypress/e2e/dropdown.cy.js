describe('QA testing spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.get('[href="/dropdown"]').click()
    cy.get('#dropdown').select('1');
    cy
      .get('#dropdown')
      .find(':selected')
      .contains('Option 1')
    cy.get('#dropdown').select('2');
    cy
      .get('#dropdown')
      .find(':selected')
      .contains('Option 2')
    
  })
})