import ElementoPedido from "./elemento_pedido.js";
import Producto from "./producto.js";
import Precio from "./precio.js";
import Tiempo from "./tiempo.js";
import Fecha from "./fecha.js";
import Pedido from "./pedido.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import Restaurante from "./restaurante.js"

class Main {
  constructor() {
    this.pedido = new Pedido(
      new Fecha(24, 4, 2021),
      new Tiempo(6, 15, 'PM'),
      new Cliente('Alberto',
        new Direccion('República de Guatemala', 14, 'Everardo', 24, 'Colima', 'Suiza'),
        3121060505));

    this.restau = new Restaurante('Tarantino´s', '117', 'Av. San Fernando, Republica de Belice');
  }


  testElementoPedido() {
    let x = new ElementoPedido(new Producto("Pizza", new Precio(130.6)), 2);
    console.log(x.getDescripcion());
  }

  testPedido() {
    console.log(this.pedido.getNumeroElementos());
    console.log(this.pedido.getCostoTotal());
    console.log(this.pedido.getProductos());
    console.log(this.pedido.getResumen());
  }

  agregarElemento() {
    let elem1 = new ElementoPedido(new Producto('Pizza hawaiana', new Precio(50.5)), 3);
    let elem2 = new ElementoPedido(new Producto('Coca de lata', new Precio(13.3)), 5);
    this.pedido.agregarElemento(elem1);
    this.pedido.agregarElemento(elem2);
    this.pedido.listarElementos();
  }

  testRestaurante() {
    this.restau.registrarProductos(new Producto('Champiñon de Mario Bros', new Precio(180.500)));
    this.restau.registrarProductos(new Producto('Leche con Coca', new Precio(30.500)));
    this.restau.listarProductos();


    let pedido1 = new Pedido(
      new Fecha(13, 10, 2019),
      new Tiempo(6, 13, 'PM'),
      new Cliente('Alberto', new Direccion('República de Guatemala', 14, 'Everardo', 24, 'Colima', 'Suiza'),
      3121060505));

    let elem1 = new ElementoPedido(new Producto('Pizza hawaiana', new Precio(50.5)), 3);
    let elem2 = new ElementoPedido(new Producto('Coca de lata', new Precio(13.3)), 5);
    pedido1.agregarElemento(elem1);
    pedido1.agregarElemento(elem2);

    let pedido2 = new Pedido(
      new Fecha(16, 4, 2021),
      new Tiempo(5, 30, 'PM'),
      new Cliente('Miguel', new Direccion('Arroyo seco', 26, 'Emilio', 22, 'Colima', 'La Antorcha'), 3121262988));

    let elem4 = new ElementoPedido(new Producto('Champiñon de Mario Bros', new Precio(180.500)), 4);
    let elem3 = new ElementoPedido(new Producto('Leche con Coca', new Precio(30.500)), 10);
    pedido2.agregarElemento(elem3);
    pedido2.agregarElemento(elem4);

    this.restau.registrarPedido(pedido1);
    this.restau.registrarPedido(pedido2);

    this.restau.listarPedidos();

  }
}

let app = new Main();

app.testRestaurante();