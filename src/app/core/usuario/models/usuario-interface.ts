export interface UsuarioRegistroRequest {
    idPersona: number,
    contrasenia: string,
    aplicativo: string
}

export interface UsuarioRegistroResponse {
    datos: string;
    mensaje: string;
}

export interface UsuarioGenerarSecretoRequest {
    idPersona: number
}

export interface UsuarioGenerarSecretoResponse {
    datos: UsuarioGenerarSecretoDatosResponse;
    mensaje: string;
}

export interface UsuarioGenerarSecretoDatosResponse {
    idUsuario: number;
    otpauthUri: string;
}

export interface UsuarioSegundoFaActivarRequest {
    idUsuario: number;
    otp: string;
}

export interface UsuarioSegundoFaActivarResponse {
    datos: boolean;
    mensaje: string;
}