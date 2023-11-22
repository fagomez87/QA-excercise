describe('QA testing spec', () => {
    it('passes', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get('[href="/login"]').click()
        cy.url().should('include','/login')
            // EMPTY LOGIN
        cy.get('.fa').click()
        cy.get('#flash').should('be.visible')
        cy.get('#flash').should('have.text', '\n            Your username is invalid!\n            ×\n          ')

        // INVALID LOGIN
        cy.get('#username').type('asjsakj')
        cy.get('#password').type('asdasdasds')
        cy.get('.fa').click()
        cy.get('#flash').should('be.visible')
        cy.get('#flash').should('have.text', '\n            Your username is invalid!\n            ×\n          ')

        // VALID LOGIN
        cy.get('#username').clear()
        cy.get('#username').type('tomsmith')
        cy.get('#password').clear()
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
        cy.url().should('include','/secure')
        cy.get('#flash').should('have.text', '\n            You logged into a secure area!\n            ×\n          ')
      
    })
  })