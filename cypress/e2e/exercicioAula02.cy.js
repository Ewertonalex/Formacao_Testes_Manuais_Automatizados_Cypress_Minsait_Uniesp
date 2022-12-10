/// <reference types="cypress" />
import  'cypress-file-upload' 
import signup from '../pages/SignupPage' //importando a classe instaciada SignupPage onde estão as linhas de testes
import SignupFactory from '../factories/SignupFactory' //importando modulo criado na pasta factories


describe('Cadastro', () => {

    // beforeEach(function() { 
    //     cy.fixture('usuario').then((u) => {   //cypress identifica o aqruivo json la do fixtures so pelo nome dele / then paera pegar o resultado da massa de testes / u = abreviação de usuario
    //         this.usuario = u //this = palavra reservada para criar uma variavel de contexto que é o usuario que recebe o resultado de u que é massa de testes do arquivo.json
    //     })
    // })

    afterEach(() => {
        cy.get('#submitbtn').click() //botao Submit
    })
    // Padrao de projeto Page Object    
    //var signup = new SignupPage()  //criando variavel para instaciar a classe Signup, para ter acesso as funcões
    it('Validando cadastro de usuário', function () {      

        var usuario = SignupFactory.usuario() //vai criar massa de teste

        signup.go() // fazendo chamada às funções - ir para página de cadastro
        signup.fillForm(usuario) // chamando a massa de testes pra preencher formulário          
    })

    it('E-mail inválido', function () {    
        
        var usuario = SignupFactory.usuario() //vai criar massa de teste
        usuario.email = 'teste.com.br'  //mudando dado na massta de testes

        signup.go() // fazendo chamada às funções - ir para página de cadastro
        signup.fillForm(usuario) // chamando a massa de testes pra preencher formulário    
    })

    it('Phone inválido', function () {   
        
        var usuario = SignupFactory.usuario() //vai criar massa de teste
        usuario.phone = 'abcde'  //mudando dado na massta de testes

        signup.go() // fazendo chamada às funções - ir para página de cadastro
        signup.fillForm(usuario) // chamando a massa de testes pra preencher formulário      
    })
    
    it('Validar botões de Redes Sociais', () => {        
        signup.socialNetworks() // fazendo chamada às funções - validando botões de redes sociais   
    })
})

