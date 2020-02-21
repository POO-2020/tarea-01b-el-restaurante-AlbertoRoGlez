import Precio from "./precio.js"
import Producto from "./producto.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"

class Main {
    constructor(){}
    testProducto(){
        let x = new Producto("Mexicana", new Precio(200))
        console.log(x.getDescripcion())
    }
}

let app = new Main()
app.testProducto()