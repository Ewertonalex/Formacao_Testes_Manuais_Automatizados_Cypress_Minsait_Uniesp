

class SignupPage {
    go() { //entrar na pagina e testes de titulo h1
        cy.viewport(1440, 900) //Definir resolução  
        cy.visit('https://demo.automationtesting.in/Register.html') //Entrar na página
        cy.contains('Automation Demo Site') //Verificando se contem o título como na página
        cy.get('#header .row h1').should('have.text', 'Automation Demo Site ') //Validar texto no H1
    }
    fillForm(usuario) { //massa de testes para preencher formulário
        cy.get('input[placeholder="First Name"]').type(usuario.firstNome) //Primeiro nome
        cy.get('input[placeholder="Last Name"]').type(usuario.lastNome) //Ultimo nome
        cy.get('textarea[rows="3"]').type(usuario.address) //Endereço
        cy.get('input[type="email"]').type(usuario.email)  //email
        cy.get('input[type="tel"]').type(usuario.phone) //telefone
        cy.get('input[value="Male"]').click() //gender
        cy.get('#checkbox2').click() //hobbies
        cy.get('#msdd').click() //Clicar em Languagens
        cy.get(':nth-child(29) > .ui-corner-all').click() //Selecionar linguagem 1
        cy.get(':nth-child(30) > .ui-corner-all').click() //Selecionar linguagem 2
        cy.get('#header .row h1').click() //sair da lista de linguagens
        cy.get('#Skills').select('APIs')  //Selecionar Skills
        cy.get('#countries') // BUB - NÃO ABRE A LISTA DE OPÇÕES
        cy.get('.select2-selection').click()
        cy.get('#select2-country-results > :nth-child(10)').click()
        cy.get('#yearbox').select('1985') //date
        cy.get('select[placeholder="Month"]').select('January') //monthy
        cy.get('#daybox').select('11') //day
        cy.get('#firstpassword').type('testesenha') //senha
        cy.get('#secondpassword').type('testesenha') //confirmar senha      
        cy.get("#imagesrc").attachFile('/images/' + usuario.photo) //upload foto chamando endereço + objeto
    }
    submit(usuario) { //Validar botão Submit
        cy.contains('#submitbtn', usuario.botaoSubmit).click() //botao Submit
    }
    socialNetworks() { //Validar botões de redes sociais
        cy.get('.linkedin').click() //Clicar no botão Linkedin
        cy.get('.facebook').click() //Clicar no botão Facebook
        cy.get('.twitter').click() //Clicar no botão Twitter
        cy.get('.google-plus').click() //Clicar no botão Google
        cy.get('.youtube').click() //Clicar no botão Youtube
    }
}

export default new SignupPage;