import { validLogin } from '../support/loginHelper'    // This is the imported Login file that decreases the Time and efforts and increases effeciency.
    beforeEach(() => {
        validLogin()
      })

describe('template spec', () => {
    it('TC01: Ideal condition of Add New Campaign', () => {
        // cy.visit('https://devrcs.pinnacle.in')
        // cy.get('#mui-2').type('vinoda.khatri@pinnacle.in')
        // cy.get('#outlined-adornment-password').type('PinnacleRCS@2024')
        // cy.get('.MuiButton-contained').click()

        // Click on RCS Management and select Campaigns
        cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.wait(2000)

        // Add new campaign
        cy.get('.listHeaderFilter > .MuiGrid-root > :nth-child(3)').click({ force: true })
        const campaignname = `campaign_${Date.now()}`
        cy.get('#mui-5').type(campaignname)
        cy.get('#select-bot-for-campaign').click()
        cy.get(':nth-child(4) > .MuiGrid-container > .MuiGrid-grid-md-8 > .MuiTypography-root').click()
        cy.wait(2000)
        cy.get('.MuiGrid-grid-md-10 > .MuiFormControl-root > .MuiInputBase-root > #select-template-label').click()
        cy.get(':nth-child(55) > .MuiGrid-container > .MuiGrid-grid-md-7 > .MuiTypography-root').click()
        cy.get('.css-12ku2xd > .MuiFormControl-root > .MuiInputBase-root > #select-template-label').click()
        cy.get('[data-value="+919049474610"]').click()

        // send a Test message to this selected number 
        cy.get('.css-gtc9zh > .MuiButtonBase-root').click()

        cy.get(':nth-child(6) > :nth-child(2)').click(); 
        // Selecting file from local location when pulled in any others 
        cy.get('input[type="file"]').selectFile("C:\\Users\\leado\\OneDrive\\Desktop\\Cypress-Folders\\cypress-rcs\\officeNumbers1.csv", { force: true });
        cy.wait(2000);
        cy.get('.MuiCardContent-root > .css-v3z1wi > :nth-child(1) > .MuiButtonBase-root').click();

    })
})