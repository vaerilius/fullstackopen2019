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

      cy.contains('create new')
        .click()
      cy.get('#title').type('test blog from cypress')
      cy.get('#author').type('cypress')
      cy.get('#url')
        .type('https://docs.cypress.io/guides/references/best-practices.html')
      cy.get('#create').click()
    })

    it('User can login', function () {
      cy.contains('timo testaaja logged in')
    })

    it('a new blog can be created', function () {
      cy.contains('test blog from cypress cypress')
    })

    it('Added blog can comment', function () {
      cy.contains('test blog from cypress cypress').click()
      cy.get('#commentInput').type('a comment from cypress')
      cy.contains('add comment').click()
      cy.contains('a comment from cypress')
    })

    it('when like a blog, value of likes increase by 1', function () {
      cy.contains('test blog from cypress cypress').click()
      cy.contains('0 likes')
      cy.get('#like').click()
      cy.contains('1 likes')
    })
    it('user can logout', function () {
      cy.contains('logout').click()
      cy.contains('Login to the application')
    })
  })


})