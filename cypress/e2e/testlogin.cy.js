import { validLogin } from '../support/loginHelper'

describe('Dashboard Tests', () => {
  beforeEach(() => {
    validLogin()
  })

  it('Should show dashboard after login', () => {
    cy.contains('Dashboard').should('be.visible')
  })
})
