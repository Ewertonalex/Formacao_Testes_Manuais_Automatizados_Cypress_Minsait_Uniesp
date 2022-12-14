

class Page {
    go() { //entrar na pagina e testes de titulo h1
        cy.viewport(1440, 900) //Definir resolução  
        cy.visit('https://opensource-demo.orangehrmlive.com/') //Entrar na página    
    }
    pageCorrect() { 

        cy.get("input[name='username']").should("be.visible")
        cy.get('input[type="password"]').should("be.visible")       
        cy.get("button[type='submit']").should("be.visible")
    }
    login(login) { //massa de testes para preencher formulário

        cy.get('input[name="username"]').type(login.login) // Preenchendo campo login
        cy.get('input[type="password"]').type(login.password) // Preenchendo campo senha
    }
    submit(login) { //Validar botão Submit
        cy.get('button[type="submit"]').click()
    }
    modalContentShoulBe(expectedMessage) {
        cy.get('.oxd-alert .oxd-text').should('have.text', expectedMessage) // validando mensangem de erro
    }

    alertMessageShouldBe(expectedMessage) {
        cy.contains('.oxd-text--span', expectedMessage).should('be.visible')
        
    }
    recpassword(expectedMessageSucess) {
        cy.get('.orangehrm-login-forgot').click() //validando link recuperar senha
        cy.get('.oxd-input').type('Admin') // validar Preechendo campo usermane
        cy.get('button[type="submit"]').click() //validar click no botão reset
        cy.get('.oxd-text--h6').should('have.text', expectedMessageSucess) // validando mensangem de sucesso
    }
    refresPage() {
        cy.get('.orangehrm-login-forgot').click() //validando link recuperar senha
        cy.get('.oxd-input').type('Admin') // validar Preechendo campo usermane
        cy.get("button[type='button']").click();
    }       
}

export default new Page;

