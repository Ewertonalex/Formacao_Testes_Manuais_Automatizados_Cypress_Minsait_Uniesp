var faker = require('faker')

export default {

    usuario: function() {

        var login = faker.name.firstName()
        

        var data = {

            login: `${login}`, //chamando o fake name
            password: 'password',
                
        }

        return data
    }     

}