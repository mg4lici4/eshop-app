export const environment = {
    production: false,
    endpoints: {
        login: {
            username: 'http://localhost:5000/api/v1/eshop/Login/username',
            segundofa: 'http://localhost:5000/api/v1/eshop/Login/2fa'
        },
        personas: {
            registro: 'http://localhost:5000/api/v1/eshop/Persona'
        },
        usuarios: {
            registrar: 'http://localhost:5000/api/v1/eshop/Usuario',
            segundofa: {
                generar: 'http://localhost:5000/api/v1/eshop/Usuario/segundofa',
                activar: 'http://localhost:5000/api/v1/eshop/Usuario/segundofa/activar'
            }
        }
    },
    featureFlag: true
};