describe('template spec', () => {
    it('TC01: Ideal Condition of Create Bot', () => {
        cy.visit('https://devrcs.pinnacle.in')
        cy.get('#mui-2').type('vinoda.khatri@pinnacle.in')
        cy.get('#outlined-adornment-password').type('PinnacleRCS@2024')
        cy.get('.MuiButton-contained').click()

        // Click on RCS Management and Bots
        cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('.MuiCollapse-entered > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(2) > .MuiButtonBase-root').click()
        cy.wait(1000)

        // Now Add new Bot
        cy.get('.css-db4br1').click()
        const Botname = `Bot_${Date.now()}`
        cy.get('#mui-6').type(Botname) // BOT Name
        cy.get('#brand').click() // Click on Brand name selection
        cy.get('#mui-7 > .MuiButtonBase-root').click() // Select Pinnacle teleservices Pvt. Ltd.

        // UPLOAD BOT LOGO
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiButtonBase-root').click();   // Click the upload button
        cy.get('input[type="file"]').eq(0).selectFile('googlelogo.jpeg', { force: true }); // Upload that image (Make sure to keep images in same folder of cypress)
        cy.get('.ReactCrop__crop-selection').click(); // Click on cropped image
        cy.get('.MuiCardContent-root > .MuiButton-root').click() // Select image

        // UPLOAD BANNER IMAGE
        cy.get('.MuiFormControl-root > .MuiButtonBase-root').click()
        cy.get('input[type="file"]').eq(1).selectFile('computerbanner.jpeg', { force: true }); 
        cy.get('.ReactCrop__crop-selection').click()
        cy.get('.MuiCardContent-root > .MuiButton-root').click({force:true}) 
                
        cy.get('#mui-8').type('Hi this is a short message') //Write Short message
        cy.get('#mui-11').type('8989898989') // Write number 1
        cy.get('#mui-12').type('Contact No- 1') 
        // cy.get('.MuiGrid-grid-md-12 > .css-ckyhk3 > .MuiButtonBase-root').click()  // Click on + Add Another Phone number
        // cy.get('#mui-22').type('8976542783') // Write number 2
        // cy.get('#mui-23').type('Contact No- 2')  
        // cy.get('.MuiGrid-grid-md-12 > .css-ckyhk3 > .MuiButton-contained').click() // Agian Click on + Add Another Phone number 
        // cy.get('#mui-26').type('8974598783') // Write number 3
        // cy.get('#mui-27').type('Contact No- 3')

        cy.get('#mui-13').type('testdemo@email.com') // Write email 1
        cy.get('#mui-14').type('Email Id- 1')
        // cy.get('.css-1kuggog > .MuiBox-root > .MuiButtonBase-root').click() // Click on + Add Email
        // cy.get('#mui-28').type('testdemo2@email.com') // Write email 2
        // cy.get('#mui-29').type('Email Id- 2')
        // cy.get('.css-1kuggog > .MuiBox-root > .MuiButton-contained').click() // Again Click on + Add Email
        // cy.get('#mui-30').type('testdemo3@email.com') // Write email 3
        // cy.get('#mui-31').type('Email Id- 3')

        cy.get('#mui-15').type('https://google.com') // write Website 1
        cy.get('#mui-16').type('Website- 1') 
        // cy.get('.css-saf7ct > .MuiBox-root > .MuiButtonBase-root').click() // Click on + Add Website
        // cy.get('#mui-32').type('https://google.com') // write Website 2
        // cy.get('#mui-33').type('Website- 2') 
        // cy.get('.MuiBox-root > .MuiButton-contained').click() // Again Click on + Add Website
        // cy.get('#mui-34').type('https://google.com') // write Website 3
        // cy.get('#mui-35').type('Website- 3')

        cy.get('#mui-17').type('https://www.instagram.com') 
        cy.get('#mui-18').type('https://www.youtube.com')
        cy.get('#mui-19').type('English, Hindi')

        cy.get(':nth-child(10) > .MuiFormControl-root > .MuiBox-root > input').check()
        cy.get(':nth-child(11) > :nth-child(1) > .MuiButtonBase-root').click() // Click on create bot and bot will be created

        // Now click on Three dots and View the recently created BOT.
        cy.get('[data-testid="MoreVertIcon"]').eq(0).click()
        cy.get('.MuiMenuItem-root').click()
        cy.get('.css-14zewhv > .MuiChip-root > .MuiChip-label').should('have.text', 'NEW')
    })
})