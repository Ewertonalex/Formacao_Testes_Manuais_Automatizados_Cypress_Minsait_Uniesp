/// <reference types="cypress" />

import page from '../pages/Page'
import PageFactory from '../factories/PageFactory' //importando modulo criado na pasta factories



describe('Desafio final, validando página OrangeHRM ', () => {
    
    it('Validando título da página', function () {      

        page.go() // fazendo chamada às funções do Page Object para acessr página      
                
    })
    it('Validando login com sucesso', function () {      

        var login = PageFactory.usuario() //vai criar massa de teste
        login.login = 'Admin'  //mudando dado na massta de testes
        login.password = 'admin123'  //mudando dado na massta de testes

        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.login(login) // fazendo chamada às funções do Page Object para realizar login
        page.submit()
                
    })
    it('Validando acesso com login inválido', function () {      

        var login = PageFactory.usuario() //vai criar massa de teste
        login.password = 'admin123'  //mudando dado na massta de testes

        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.login(login) // fazendo chamada às funções do Page Object para realizar login
        page.submit() //fazendo chamada às funções do Page Object para clicar no botão login
                
    })
    it('Validando acesso com senha inválida', function () {      

        var login = PageFactory.usuario() //vai criar massa de teste
        login.login = 'Admin'  //mudando dado na massta de testes
        
        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.login(login) // fazendo chamada às funções do Page Object para realizar login
        page.submit() //fazendo chamada às funções do Page Object para clicar no botão login
                
    })
    it('Validando mensagem de erro nas crendiais de login', function () {    
        
        var login = PageFactory.usuario() //vai criar massa de teste

        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.login(login) // fazendo chamada às funções do Page Object para realizar login
        page.submit() //fazendo chamada às funções do Page Object para clicar no botão login         
        page.modalContentShoulBe('Invalid credentials') // fazendo chamada às funções do Page Object para validar texto de erro
                
    })
    it('Validando acesso com login e senha vazios', function () {      
               
        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.submit()
                
    })
    it('Validando mensagem de campos obrigatórios', function () {      
               
        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.submit()
        page.alertMessageShouldBe('Required')
                
    })
    it('Link de recuperar senha', function () {      
               
        page.go() // fazendo chamada às funções do Page Object para acessr página
        page.recpassword('Reset Password link sent successfully') // fazendo chamada às funções do Page Object para clicar no link de recuperar senha e validar mensangem de sucesso  
                        
    })            
})  

