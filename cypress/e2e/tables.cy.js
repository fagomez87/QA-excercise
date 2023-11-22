describe('QA testing spec', () => {
    it('passes', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get('[href="/tables"]').click()
        cy.url().should('include','/tables')
        
        // CLICK TWICE TO SORT DESC
        cy.get('table:nth-of-type(1) th:nth-of-type(4) > span').click()
        cy.get('table:nth-of-type(1) th:nth-of-type(4) > span').click()

        cy.get('table:nth-of-type(1) tr:nth-of-type(2) > td:nth-of-type(4)').should('have.text','$51.00')
    })
  })