describe('Happy Path Login', function () {
    it('Makes an assertion', function () {
        cy.visit('/')

        cy.get('#az-formly_Object_no-id_username_0')
            .type(Cypress.env("userName"))
        cy.get('#az-formly_Object_no-id_password_0')
            .type(Cypress.env("password"))
        cy.contains('Sign In').click()

        cy.url().should('include', 'accounts/recent')

        cy.contains('Auto Mation').click()
        cy.contains('Sign Out').click()

        cy.url().should('include', 'login')
    });
})

describe('Login Page Elements Are Genki', function () {
    it('validates all page elements', function () {
        cy.visit('/')
        cy.contains('Sign In')
            .should('be.disabled')
        cy.get('#az-formly_Object_no-id_username_0')
            .type('höchst')
            .should('have.value', 'höchst')
        cy.get('#az-formly_Object_no-id_password_0')
            .type('más')
            .should('have.value', 'más')
        cy.contains('Sign In')
            .should('be.enabled')
        cy.get('[type="checkbox"]')
            .should('not.be.checked')
            .check()
            .should('be.checked')

    })
})

describe('Negative Path Login', function () {
    it('should fail with invalid name', function () {
        cy.visit('/')
        cy.get('#az-formly_Object_no-id_username_0')
            .type('Joe@mama.com')
        cy.get('#az-formly_Object_no-id_password_0')
            .type('test123')
        cy.contains('Sign In').click()
        cy.get('div.panel-heading')
            .should('contain', 'Invalid Credentials')
    });
})

