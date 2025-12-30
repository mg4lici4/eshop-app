export const environment = {
    production: false,
    endpoints: {
        login: 'http://localhost:5167/api/v1/eshop/Login',
        personas:{
            registro: 'http://localhost:5167/api/v1/eshop/Persona'
        },
        usuarios:{
            secreto: 'http://localhost:5167/api/v1/eshop/Usuario/secreto'
        }
    },
    featureFlag: true
};