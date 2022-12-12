/// <reference types="cypress" />

import page from '../pages/Page'
import PageFactory from '../factories/PageFactory' //importando modulo criado na pasta factories
import AdminPage from '../pages/AdminPage'



describe('Desafio final, Validando página de Login ', () => {
    
    xit('Validando título da página', function () {      

        page.go() // fazendo chamada às funções do Page Object para acessr página      
                
    })
    xit('Validando login com sucesso', function () {      

        var login = PageFactory.usuario() //vai criar massa de teste
        login.login = 'Admin'  //mudando dado na massta de testes
        login.password = 'admin123'  //mudando dado na massta de testes

        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.login(login) // fazendo chamada às funções do Page Object para realizar login
        page.submit()
                
    })
    xit('Validando acesso com login inválido', function () {      

        var login = PageFactory.usuario() //vai criar massa de teste
        login.password = 'admin123'  //mudando dado na massta de testes

        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.login(login) // fazendo chamada às funções do Page Object para realizar login
        page.submit() //fazendo chamada às funções do Page Object para clicar no botão login
                
    })
    xit('Validando acesso com senha inválida', function () {      

        var login = PageFactory.usuario() //vai criar massa de teste
        login.login = 'Admin'  //mudando dado na massta de testes
        
        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.login(login) // fazendo chamada às funções do Page Object para realizar login
        page.submit() //fazendo chamada às funções do Page Object para clicar no botão login
                
    })
    xit('Validando mensagem de erro nas crendiais de login', function () {    
        
        var login = PageFactory.usuario() //vai criar massa de teste

        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.login(login) // fazendo chamada às funções do Page Object para realizar login
        page.submit() //fazendo chamada às funções do Page Object para clicar no botão login         
        page.modalContentShoulBe('Invalid credentials') // fazendo chamada às funções do Page Object para validar texto de erro
                
    })
    xit('Validando acesso com login e senha vazios', function () {      
               
        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.submit()
                
    })
    xit('Validando mensagem de campos obrigatórios', function () {      
               
        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.submit()
        page.alertMessageShouldBe('Required')
                
    })
    xit('Link de recuperar senha', function () {      
               
        page.go() // fazendo chamada às funções do Page Object para acessr página
        page.recpassword('Reset Password link sent successfully') // fazendo chamada às funções do Page Object para clicar no link de recuperar senha e validar mensangem de sucesso  
                        
    })            
})

describe('Desafio final, Validando campo Admin ', () => {

    beforeEach(function() { //Tudo aqui é executado  ANTES de TODOS os casos de testes
        AdminPage.go() //realizando login
        AdminPage.submit()
    })
    
    xit('Validar buscar usuário por Username', function () {      

        AdminPage.findUsername()
                        
    })
    xit('Validar buscar usuário por Nome', function () {      

        AdminPage.findName()
                        
    })

})

describe('Desafio final, Validando campo My Info ', () => {

    beforeEach(function() { //Tudo aqui é executado  ANTES de TODOS os casos de testes
        AdminPage.go() //realizando login
        AdminPage.submit()
    })
    it('Validar mudar FirstName, MiddleName e LastName', function () {      

        AdminPage.myInfo()
        AdminPage.saveOne()                       
    })
})
