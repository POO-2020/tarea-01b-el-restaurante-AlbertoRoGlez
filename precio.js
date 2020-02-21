export default class Precio {
    /**
     * 
     * @param {number} precio El precio del producto
     */
    constructor(valor) {
        this.valor = valor;
    }
    getPrecio(){
        return "$" + new Intl.NumberFormat("en-US").format(this.valor)
    }
}
