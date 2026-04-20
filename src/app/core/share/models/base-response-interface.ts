export interface BaseResponseInterface<T> {
    mensaje: string;
    datos: T | null;
}
