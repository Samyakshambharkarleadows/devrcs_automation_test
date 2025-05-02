describe('template spec', () => {
    it('TC01: Ideal condition of run Campaign', () => {
        cy.visit('https://devrcs.pinnacle.in')
        cy.get('#mui-2').type('vinoda.khatri@pinnacle.in')
        cy.get('#outlined-adornment-password').type('PinnacleRCS@2024')
        cy.get('.MuiButton-contained').click()

        // Click on RCS Management and select Campaigns
        cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.wait(2000)

        // Now Click on 3 dots and then run the campaign
        // ===== Note: Everytime before running this campaign run the Add Campaign Template 
        cy.get('[data-testid="MoreVertIcon"]').first().click({ force: true });
        cy.get('.MuiList-root > :nth-child(2)').click()
        cy.wait(2000)

        cy.get('.MuiDialogActions-root > .MuiButton-contained').click()



    })
})