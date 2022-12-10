var faker = require('faker')
var cpf = require('gerador-validador-cpf')


export default {

    usuario: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {

            firstNome: `${firstName}`, //chamando o fake name
            lastNome: `${lastName}`, //chamando o fake name
            address: 'Avenida Cabo Branco, 77',
            email: faker.internet.email(firstName),
            phone: '1234567890',
            password: 'password',
            confpassword: 'password',  
            photo: 'photo.png',
            botaoSubmit: 'Submit'
    
        }

        return data
    }     

}