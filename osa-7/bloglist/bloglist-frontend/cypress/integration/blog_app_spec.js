describe('Blog App ', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000')
        cy.get('#username')
        .type('aaa')
        cy.get('#password')
        .type('aaaa')
        cy.contains('login')
        .click()
      })
    it('User can login', function() {
        cy.contains('aaaa logged in')
    })
    it('a new blog can be created', function() {
       cy.contains('create new')
       .click()
       cy.get('#title').type('test blog from cypress')
       cy.get('#author').type('cypress')
       cy.get('#url')
       .type('https://docs.cypress.io/guides/references/best-practices.html')
       cy.get('#create').click()

       cy.contains('test blog from cypress cypress')
    })
  })