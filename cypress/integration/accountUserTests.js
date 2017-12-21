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
        cy.contains('Routed to User')
        //  --Call Screening section
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
        cy.get('.az-screen-caller__remove-caller-link').first().click()
    })

    it('Call handling section', function () {
        //  --Call Handling section
        cy.contains('Create Schedule')
        cy.get('#az-formly_Object_no-id_callWaitingEnabled_0')
        cy.get('#az-formly_User_Zn4HfVw0SAiPRjvMt7lVFA_mediaFriends\\2e enabled_0')
        cy.get('#az-formly_Object_no-id_doNotDisturbEnabled_0')
        //      --Ring Phone tab
        cy.get(':nth-child(1) > .row > .col-md-6 > az-call-handling-chooser > .az-call-handling-chooser > select.form-control')
        cy.get('.az-call-handling-after-time > .form-control')
        cy.get(':nth-child(2) > .row > .col-md-6 > az-call-handling-chooser > .az-call-handling-chooser > .form-control')
        cy.get(':nth-child(3) > .row > .col-md-6 > az-call-handling-chooser > .az-call-handling-chooser > .form-control')
        //      --Forward All tab
        cy.contains('Forward All').click()
        cy.get('#az-formly_Object_no-id_forwardAlwaysToNumber_0')
        //      --Sim Ring tab
        cy.contains('Sim Ring').click()
        cy.get('#az-formly_Array_no-id_0_-1')
        cy.get('.az-call-handling-chooser > select.form-control')
        cy.get('.az-call-handling-after-time > .form-control')
        cy.contains('Add Number')

        cy.contains('Find Me').click()
        cy.get('#az-formly_Object_no-id_timeoutType_0')
    })

    it('Devices Tab', function () {
        cy.get('[heading="Devices"] > .nav-link').click()
        cy.contains('Add a Device')
        cy.contains('ZXHNH298N').click()
        cy.get('#az-formly_Device_JpzZoTovTu2y3mN2W8Mj2g_deviceName_0')
        cy.get('#az-formly_Device_JpzZoTovTu2y3mN2W8Mj2g_emergencyNumber_0')
        cy.get('#az-formly_Device_JpzZoTovTu2y3mN2W8Mj2g_faxEnabled_0')

        cy.get('#az-formly_Device_JpzZoTovTu2y3mN2W8Mj2g_sipPassword_0')
        cy.get('#az-formly_Device_JpzZoTovTu2y3mN2W8Mj2g_passwordConfirm_0')
    })

    it('Calling Plans Tab', function () {
        cy.get('[heading="Calling Plans"] > .nav-link').click()
        cy.contains('Add a Calling Plan')
    })

    it('Settings Tab', function () {
        cy.get('[heading="Settings"] > .nav-link').click()
        cy.get('#az-formly_User_Zn4HfVw0SAiPRjvMt7lVFA_username_0')
        cy.get('#az-formly_User_Zn4HfVw0SAiPRjvMt7lVFA_firstName_0')
        cy.get('#az-formly_User_Zn4HfVw0SAiPRjvMt7lVFA_lastName_0')
        cy.get('#az-formly_User_Zn4HfVw0SAiPRjvMt7lVFA_extension_0')

        cy.contains('Reset Password')
        cy.contains('Reset PIN')

        cy.get('#az-formly_Object_no-id_callerIdNumber_0')
        cy.get('#az-formly_Object_no-id_externalCallerIdVisible_0')

        cy.get('#az-formly_User_Zn4HfVw0SAiPRjvMt7lVFA_timeZone_0')
        cy.get('#az-formly_User_Zn4HfVw0SAiPRjvMt7lVFA_endUserType_0')
        cy.get('#az-formly_User_Zn4HfVw0SAiPRjvMt7lVFA_languageTag_0')
    })

    it('Voicemail Tab', function () {
        cy.get('.az-voicemail-tab-heading').click()
        cy.contains('Change Box')
        cy.contains('Enable')

        cy.get('#az-formly_VoicemailBox_rPhN255XSwep2wgMXdWTMg_voicemailToEmailEnabled_0')
        cy.get('#az-formly_VoicemailBox_rPhN255XSwep2wgMXdWTMg_voicemailKeepAfterEmail_0')

        cy.get('#s2id_autogen1')
    })

})

