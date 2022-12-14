/// <reference types="cypress" />

import page from '../pages/Page'
import PageFactory from '../factories/PageFactory' //importando modulo criado na pasta factories
import AdminPage from '../pages/AdminPage'



describe('Validate home page ', () => { //validar página inicial
    
    it('Check if the page loaded correctly', function () {   //validar se a página carrega corretamente   

        page.go() // fazendo chamada às funções do Page Object para acessr página
        page.pageCorrect()
                
    })
    it('Login with valid data', function () {  //Entrar com dados válidos    

        var login = PageFactory.usuario() //vai criar massa de teste
        login.login = 'Admin'  //mudando dado na massta de testes
        login.password = 'admin123'  //mudando dado na massta de testes
        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.login(login) // fazendo chamada às funções do Page Object para realizar login
        page.submit() // clicar botão login
                
    })
    it('Validate access with invalid login', function () { //Validando acesso com login inválido      

        var login = PageFactory.usuario() //vai criar massa de teste
        login.password = 'admin123'  //mudando dado na massta de testes
        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.login(login) // fazendo chamada às funções do Page Object para realizar login
        page.submit() //fazendo chamada às funções do Page Object para clicar no botão login
                
    })
    it('Validate access with invalid password', function () { //Validando acesso com senha inválida 

        var login = PageFactory.usuario() //vai criar massa de teste
        login.login = 'Admin'  //mudando dado na massta de testes
        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.login(login) // fazendo chamada às funções do Page Object para realizar login
        page.submit() //fazendo chamada às funções do Page Object para clicar no botão login         
    })
    it('Validate login credentials error message', function () {  //Validar mensagem de erro nas credenciais de login  
        
        var login = PageFactory.usuario() //vai criar massa de teste
        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.login(login) // fazendo chamada às funções do Page Object para realizar login
        page.submit() //fazendo chamada às funções do Page Object para clicar no botão login         
        page.modalContentShoulBe('Invalid credentials') // fazendo chamada às funções do Page Object para validar texto de erro         
    })
    it('Validate access with login and empty password', function () { //validar acesso com login e senha vazios     
               
        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.submit()
    })
    
    it('Validate recover password', function () {  //Validar recuperar senha   
               
        page.go() // fazendo chamada às funções do Page Object para acessr página
        page.recpassword('Reset Password link sent successfully') // fazendo chamada às funções do Page Object para clicar no link de recuperar senha e validar mensangem de sucesso                   
    })
    it("Check if clicking the cancel button will return you to the login screen", () => { //valida se quando clica em cancela retorna à pagina inicial
        
        page.go() // fazendo chamada às funções do Page Object para acessr página
        page.refresPage()    
    })            
})

describe('Required fields', () => { //Validar mensagem de campos obrigatórios

    it('Validate required fields message', function () {      
               
        page.go() // fazendo chamada às funções do Page Object para acessr página        
        page.submit()
        page.alertMessageShouldBe('Required')
                
    })

    
})

describe('Validate Admin field', () => { //Validar campo Admin

    beforeEach(function() { //Tudo aqui é executado  ANTES de TODOS os casos de testes
        AdminPage.go() //realizando login
        AdminPage.submit()
    })
    
    it('Validate search user by Username', function () {  //Validar buscar usuário por Username    

        AdminPage.findUsername()
                        
    })
    it('Validate search for user by Name', function () {  //Validar buscar usuário por Nome   

        AdminPage.findName()
                        
    })

})

describe('Validate My Info field', () => { //Validar campo My Info

    beforeEach(function() { //Tudo aqui é executado  ANTES de TODOS os casos de testes
        AdminPage.go() //realizando login
        AdminPage.submit()
    })
    it('Validate edit FirstName, MiddleName and LastName', function () {  //Validar editar FirstName, MiddleName e LastName    

        AdminPage.myInfo()
        AdminPage.saveOne()                       
    })
})
