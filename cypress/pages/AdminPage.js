

class AdminPage {
    go() { //entrar na pagina e testes de titulo h1
        cy.viewport(1440, 900) //Definir resolução
        cy.visit('https://opensource-demo.orangehrmlive.com/') //Entrar na página
        cy.get('input[name="username"]').type('Admin') // Preenchendo campo login
        cy.get('input[type="password"]').type('admin123') // Preenchendo campo senha

    }
    submit(login) { //Validar botão Submit
        cy.get('button[type="submit"]').click()
    }
    findUsername() {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() //Clicar em Admin
        cy.get('.oxd-input-group input[class="oxd-input oxd-input--active"]').type('John.Smith') // Fazendo pesquisa por Username
        cy.get('button[type="submit"]').click() //clicando no botão search
    }
    findName() {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() //Clicar em Admin
        cy.get('input[placeholder="Type for hints..."]')
            .type('John Smith') // Fazendo pesquisa por Nome
            cy.wait(5000) //espera 5 segundos         
        cy.get('.oxd-autocomplete-dropdown').click() //clicando no botão search
    }
    myInfo() {
        cy.get('input[placeholder="Search"]').type('My Info')
        cy.get('.oxd-main-menu-item .oxd-text').click()
        cy.get('input[name="firstName"]').clear()
            .type('Ewerton')                       
        cy.get('input[name="middleName"]').clear()
            .type('Alexander')
        cy.get('input[name="lastName"]').clear()
            .type('Oliveira')
        
    }
    saveOne() {
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
            cy.wait(3000) //espera 3 segundos
    }

}

export default new AdminPage;


