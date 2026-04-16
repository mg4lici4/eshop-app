export const environment = {
    production: false,
    endpoints: {
        login: 'http://localhost:5000/api/v1/eshop/Login',
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