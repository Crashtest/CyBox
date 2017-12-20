// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('loginByAdmin', (overrides = {}) => {
    Cypress.log({
        name: 'loginByAdmin'
    })
    const options = {
        method: 'POST',
        url: Cypress.env('apiUrl'),
        contentType: 'application/json',
        body: {
            username: Cypress.env('userName'),
            password: Cypress.env('password')
        }
    }
    var token = ''
    cy.request(options)
        .then((resp) => {
            expect(resp.status).to.eq(201)
            token = resp.body.authToken
            cy.log('The token is: ' + token)
        })
    cy.visit('/')
    cy.window().then(function(win){
        win.localStorage.setItem('auth-token', token)
    })
})


