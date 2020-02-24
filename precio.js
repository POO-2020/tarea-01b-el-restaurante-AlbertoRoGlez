export default class Precio {
    /**
     * 
     * @param {number} valor El valor del producto
     */
    constructor(valor) {
        this.valor = valor;
    }
    getPrecio(){
        return "$" + new Intl.NumberFormat("en-US").format(this.valor)
    }
}
