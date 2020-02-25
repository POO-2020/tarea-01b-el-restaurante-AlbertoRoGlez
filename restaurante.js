import ElementoPedido from "./elemento.js";
import Producto from "./producto.js";
import Precio from "./precio.js";
import Tiempo from "./tiempo.js";
import Fecha from "./fecha.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";

export default class Restaurante {
    /**
     * 
     * @param {string} nombre | Nombre del restaurante
     * @param {string} telefono | Teléfono del restaurante
     * @param {string} direccion |Dirección del restaurante
     */
    constructor(nombre, telefono, direccion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.productos = new Array();
        this.pedidos = new Array();
    }

    registrarProductos(producto) {
        this.productos.push(producto.getDescription());
    }

    listarProductos() {
        this.productos.forEach((producto, i) => {
            console.log(`${i} - ${producto}`)
        });
    }

    registrarPedido(pedido) {
        this.pedidos.push(pedido);
    }

    listarPedidos() {
        this.pedidos.forEach((pedido, i) => {
            console.log(`${i} - ${pedido.getResumen()}`)
        })
    }
}