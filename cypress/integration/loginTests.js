describe('Login Tests', function () {
    beforeEach(function () {
        cy.visit('/')
    });

    it('All page elements are present and in the correct state', function () {
        cy.contains('Sign In')
            .should('be.disabled');
        cy.get('#az-formly_Object_no-id_username_0')
            .type('höchst')
            .should('have.value', 'höchst');
        cy.get('#az-formly_Object_no-id_password_0')
            .type('más')
            .should('have.value', 'más');
        cy.contains('Sign In')
            .should('be.enabled');
        cy.get('[type="checkbox"]')
            .should('not.be.checked')
            .check()
            .should('be.checked')
    });

    it('Login fails with invalid name', function () {
        cy.get('#az-formly_Object_no-id_username_0').type('Inv@lid.com');
        cy.get('#az-formly_Object_no-id_password_0').type(Cypress.env("password"));
        cy.contains('Sign In').click();
        // Error message appears
        cy.get('div.panel-heading')
            .should('contain', 'Invalid Credentials')
    });

    it('Login fails with invalid password', function () {
        cy.get('#az-formly_Object_no-id_username_0').type(Cypress.env("userName"));
        cy.get('#az-formly_Object_no-id_password_0').type('Invalid Password');
        cy.contains('Sign In').click();
        cy.get('div.panel-heading')
            .should('contain', 'Invalid Credentials')
    });

    it('Login succeeds with valid credentials', function () {
        cy.get('#az-formly_Object_no-id_username_0').type(Cypress.env("userName"));
        cy.get('#az-formly_Object_no-id_password_0').type(Cypress.env("password"));
        cy.contains('Sign In').click();
        // Goes to landing page
        cy.url().should('include', 'accounts/recent');
        cy.contains(Cypress.env("fullName")).click();
        cy.contains('Sign Out').click();
        // Back out to login page
        cy.url().should('include', 'login')
    });
});