export const environment = {
  production: true,
  endpoints: {
    login: {
      username: '__LOGIN_USERNAME__',
      segundofa: '__LOGIN_2FA__'
    },
    personas: { registro: '__PERSONA_REGISTRO__' },
    usuarios: {
      registrar: '__USUARIO_REGISTRAR__',
      segundofa: {
        generar: '__USUARIO_SEGUNDOFA_GENERAR__',
        activar: '__USUARIO_SEGUNDOFA_ACTIVAR__'
      }
    }
  },
  featureFlag: '__FEATURE_FLAG__'
};