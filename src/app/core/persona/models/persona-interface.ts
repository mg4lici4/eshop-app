export interface PersonaRegistroRequest {
    nombre: string;
    apellidos: string;
    correo: string;
    celular: string;
}

export interface PersonaRegistroResponse {
    datos: number;
    mensaje: string;
}