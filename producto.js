import Precio from "./precio.js"

class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    getDescripcion() {
        return `${this.nombre} ${this.precio}`
    }
}