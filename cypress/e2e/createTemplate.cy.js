describe('template spec', () => {
    // ==============TEST CASE (1): TEXT CARD =========================== 
    it('TC01: Create Text template', () => {
        cy.visit('https://devrcs.pinnacle.in')
        cy.get('#mui-2').type('vinoda.khatri@pinnacle.in')
        cy.get('#outlined-adornment-password').type('PinnacleRCS@2024')
        cy.get('.MuiButton-contained').click()

        // Click on RCS Management and select Templates
        cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('.MuiCollapse-entered > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()

        //Add New Template
        cy.get('.MuiGrid-grid-md-3 > .MuiButtonBase-root').click()
        cy.get('.MuiInputBase-root > #botType-label').click()
        cy.get('[data-value="6690deca0e202b00019c034d"]').click()

        const Texttemp = `Texttemp_${Date.now()}`
        cy.get('#mui-6').type(Texttemp)
        cy.get('.MuiInputBase-root > #templatetype-label').click()
        cy.get('.Mui-selected').click()

        cy.get('#mui-9').type('Hi this is Test template')
        cy.get('.m-2 > .MuiButtonBase-root').click()

        cy.get('#demo-simple-select').click()
        cy.get('.Mui-selected').click()

        cy.get('.col-8 > .MuiFormControl-root > .MuiInputBase-root').type('Reply button')
        cy.get('.MuiCardActions-root > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click() // Click on create template
        cy.wait(6000)
        // now Check in list of templates where our template is created or not
        cy.wait(2000)
        cy.get('.MuiInputBase-root > #botType-label').click()
        cy.wait(1000)
        cy.get(`[data-value="Pinnacle's Campaign Bot"]`).click()
        cy.wait(5000)

    })

    // ==============TEST CASE (2): RICH CARD STAND ALONE=========================== 
    it('TC02: Create Rich Card standalone template', () => {
        cy.visit('https://devrcs.pinnacle.in')
        cy.get('#mui-2').type('vinoda.khatri@pinnacle.in')
        cy.get('#outlined-adornment-password').type('PinnacleRCS@2024')
        cy.get('.MuiButton-contained').click()

        // Click on RCS Management and select Templates
        cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('.MuiCollapse-entered > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()

        //Add New Template
        cy.get('.MuiGrid-grid-md-3 > .MuiButtonBase-root').click()
        cy.get('.MuiInputBase-root > #botType-label').click()
        cy.get('[data-value="6690deca0e202b00019c034d"]').click()

        const standalone = `standalone_${Date.now()}`
        cy.get('#mui-6').type(standalone)
        cy.get('.MuiInputBase-root > #templatetype-label').click()
        cy.get('[data-value="rich_card"]').click()

        // Choose Media Upload Image
        cy.get('.MuiFormControl-root > .MuiButtonBase-root').click()
        cy.get('input[type="file"]').eq(0).selectFile('googlelogo.jpeg', { force: true });
        cy.get('.ReactCrop__crop-selection').click()
        cy.get('.MuiCardContent-root > .MuiButton-root').click() // Select the image

        cy.get('#mui-14').type('Test Template heading - Automation Testing')
        cy.get('#mui-15').type('This is Test description - Cypress Automation testing')

        cy.get('.m-2 > .MuiButtonBase-root').click()
        cy.get('.MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select').click()
        cy.get('[data-value="url_action"]').click()
        cy.get('#mui-19').type('Visit now')
        cy.get('#mui-20').type('https://pinnacle.in')

        //Click on create template
        cy.get('.MuiCardActions-root > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click()
        cy.wait(5000)
        // now Check in list of templates where our template is created or not
        cy.wait(2000)
        cy.get('.MuiInputBase-root > #botType-label').click()
        cy.wait(1000)
        cy.get(`[data-value="Pinnacle's Campaign Bot"]`).click()
        cy.wait(5000)

    })

    // ==============TEST CASE (3): RICH CARD CAROUSEL=========================== 
        it('TC03: Create Rich Card Carousel template', () => {
            cy.visit('https://devrcs.pinnacle.in')
            cy.get('#mui-2').type('vinoda.khatri@pinnacle.in')
            cy.get('#outlined-adornment-password').type('PinnacleRCS@2024')
            cy.get('.MuiButton-contained').click()

            // Click on RCS Management and select Templates
            cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root').click()
            cy.get('.MuiCollapse-entered > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()

            //Add New Template
            cy.get('.MuiGrid-grid-md-3 > .MuiButtonBase-root').click()
            cy.get('.MuiInputBase-root > #botType-label').click()
            cy.get('[data-value="6690deca0e202b00019c034d"]').click()

            const carousel = `carousel_${Date.now()}`
            cy.get('#mui-6').type(carousel)
            cy.get('.MuiInputBase-root > #templatetype-label').click()
            cy.get('[data-value="carousel"]').click()

            // Choose Media Upload Image
            cy.get(':nth-child(1) > .rounded > .css-uckqfc > .ml-3 > :nth-child(1) > .btn-container > .MuiFormControl-root > .MuiButtonBase-root').click()
            cy.get('input[type="file"]').eq(0).selectFile('googlelogo.jpeg', { force: true }); 
            cy.get('.ReactCrop__crop-selection').click() 
            cy.get('.MuiCardContent-root > .MuiButton-root').click()   // Click on select image 

            cy.get('#mui-14').type('Automation Title 1') 
            cy.get('#mui-15').type('Automation Description 1')

            cy.get(':nth-child(1) > .rounded > .css-uckqfc > :nth-child(11) > .gap-3 > .MuiButtonBase-root').click()  // Click on Add Button

            cy.get('.MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select').click() 
            cy.get('#mui-20 > .Mui-selected').click()
            cy.get('#mui-21').type('Reply')

            // ===== Now edit the another card (CARD 2)
            cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click()

            //Upload image
            cy.get('.MuiFormControl-root > .MuiButtonBase-root').click()
            cy.get('input[type="file"]').selectFile('computerbanner.jpeg', { force: true }); 
            cy.get('.ReactCrop__crop-selection').click() 
            cy.get('.MuiCardContent-root > .MuiButton-root').click()   // Click on select image

            cy.get('#mui-17').type('Automation Title 2') 
            cy.get('#mui-18').type('Automation Description 2')

            //Click on button 
            cy.get(':nth-child(2) > .rounded > .css-uckqfc > :nth-child(11) > .gap-3 > .MuiButtonBase-root').click()
            cy.get(':nth-child(2) > .rounded > .css-uckqfc > :nth-child(11) > :nth-child(2) > .m-3 > .col > :nth-child(2) > .MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select').click()
            cy.get('[data-value="url_action"]').click()
            cy.get('#mui-24').type('Click')
            cy.get('#mui-25').type('https://www.leadowserp.com')

            cy.get('.MuiCardActions-root > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click() //Click on create Template
            cy.wait(5000)
            // now Check in list of templates where our template is created or not
            cy.wait(2000)
            cy.get('.MuiInputBase-root > #botType-label').click()
            cy.wait(1000)
            cy.get(`[data-value="Pinnacle's Campaign Bot"]`).click()
            cy.wait(5000)

        })
})