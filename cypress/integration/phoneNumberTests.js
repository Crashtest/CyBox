describe('User Calls Tab Elements are Genki', function () {
    beforeEach(function () {
        cy.loginByAdmin()
        cy.visit('/')
        cy.get('#search-account').type('kdi{enter}')
        cy.contains('Rylan\'s Memorable Testing').click()
        cy.url().should('include', 'advanced/users')
        cy.contains('Buddy Dude2221').click()
    })

    it('All elements on the Calls tab are good', function () {
        cy.get(':nth-child(2) > .az-left-nav__state').click()
        cy.contains('Add a Number').click()
    })
})