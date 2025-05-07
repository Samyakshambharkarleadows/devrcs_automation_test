export const validLogin = () => {
    cy.visit('https://devrcs.pinnacle.in')
    cy.get('#mui-2').type('vinoda.khatri@pinnacle.in')
    cy.get('#outlined-adornment-password').type('PinnacleRCS@2024')
    cy.get('.MuiButton-contained').click()
}