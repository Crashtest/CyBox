describe('User Calls Tab Elements are Genki', function () {
    before(function () {
        cy.loginByAdmin()
    })

    beforeEach(function () {
        cy.visit('/')
        cy.get('#search-account').type('kdi')
        cy.contains('kdid9911').click()
        cy.url().should('include', 'advanced/users')
        cy.contains('Buddy Dude2221').click()
    })

    it('Phone Numbers and Call Screening work', function () {
        //  --Phone Numbers Section
        cy.contains('Routed to User')
        //  --Call Screening Section
        cy.get('#az-formly_Object_no-id_forwardTn_0')

        cy.get('#az-formly_Object_no-id_anonymousCallScreen_0').select('Allow with Priority Ring')
        cy.get('#az-formly_Object_no-id_anonymousRingType_0').select('Distinctive Ring 1')
        cy.get('#az-formly_Object_no-id_anonymousCallScreen_0').select('Allow')
        cy.get('#az-formly_Object_no-id_anonymousRingType_0').should('not.be.visible')

        cy.get('#az-formly_Object_no-id_tollFreeCallScreen_0').select('Forward')
        cy.get('.alert-warning').contains('without a Screening')
        cy.get('#az-formly_Object_no-id_tollFreeCallScreen_0').select('Allow')
        cy.get('.alert-warning').should('not.be.visible')

        cy.get('#az-formly_Object_no-id_defaultCallScreen_0').select('Voicemail').select('Allow')

        cy.contains('Add a Caller').click()
        cy.get('#az-formly_Object_no-id_telephoneNumber_-1').type('11')
        cy.get('#az-formly_Object_no-id_blockType_-1').select('Allow with Priority Ring')
        cy.get('#az-formly_Object_no-id_ringType_-1').select('Distinctive Ring 3')
        cy.get('.az-screen-caller__remove-caller-link').click()
    })

})

