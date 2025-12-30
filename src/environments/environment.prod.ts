// environment.prod.ts
export const environment = {
    production: true,
    endpoints: {
        login: 'http://localhost:8080/api/v1/eshop/Login',
        personas:{
            registro: 'http://localhost:8080/api/v1/eshop/Persona'
        },
        usuarios:{
            secreto: 'http://localhost:8080/api/v1/eshop/Usuario/secreto'
        }
    },
    featureFlag: false
};