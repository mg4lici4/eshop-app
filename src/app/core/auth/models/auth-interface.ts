export interface AuthCredencialesResponse {
    datos: string;
    mensaje: string;
}

export interface AuthCredencialesRequest {
  username: string;
  password: string;
}

export interface AuthCredenciales2FAResponse {
    datos: string;
    mensaje: string;
}

export interface AuthCredenciales2FARequest {
  jti: string;
  otp: string;
}

export interface TokenPayload {
  sub: string;
  name: string;
  jti: string;
  exp: number;
  iss: string;
  aud: string;
}
