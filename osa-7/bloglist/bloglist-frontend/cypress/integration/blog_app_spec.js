describe('Blog App ', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    const user = {
      name: 'timo testaaja',
      username: 'testaaja',
      password: 'test'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3000')


  })
  describe('when logged in', function () {

    beforeEach(function () {
      cy.get('#username')
        .type('testaaja')
      cy.get('#password')
        .type('test')
      cy.contains('login')
        .click()
    })

    it('User can login', function () {
      cy.contains('timo testaaja logged in')
    })
    it('a new blog can be created', function () {
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

})