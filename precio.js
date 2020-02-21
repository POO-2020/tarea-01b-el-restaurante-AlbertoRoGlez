export default class Precio {
    /**
     * 
     * @param {number} precio El precio del producto
     */
    constructor(valor) {
        this.valor = valor;
    }
    getPrecio(){
        return `${this.valor}`
    }
}