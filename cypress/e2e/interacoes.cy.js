/// <reference types="cypress" />



describe('Interações com select, radio echecks', () => {
    it('Validando interações', () => {        
        
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')  
        cy.get('#dropdowm-menu-1').select('C#')     
        cy.get('#dropdowm-menu-2').select('TestNG')     
        cy.get('#dropdowm-menu-3').select('JavaScript')
        cy.get('[type=checkbox]').check('option-1').should('be.checked')
        cy.get('[type=checkbox]').uncheck('option-3').should('not.be.checked')
        cy.get('input[value="green"]').click()
        cy.get('input[value="yellow"]').click()
        cy.get('input[value="green"]').should("not.be.checked")
        cy.get('input[value="pumpkin"]').click().should('be.checked')
        cy.get('#fruit-selects').select('Pear')

        
        
    })       
    
})      

