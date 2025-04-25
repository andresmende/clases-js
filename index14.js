// Crear una clase Producto con un atributo privado precio
// y métodos públicos setPrecio() y getPrecio() para acceder y
// modificar el precio.

class Producto{
    #precio;

    constructor(nuevoPrecio){
        this.#precio = nuevoPrecio;
    }

    setPrecio(precioModificado){
        this.#precio = precioModificado;
        return ` Precio modificado es de: ${this.#precio}`;
    }

    getPrecio(){
        return ` Precio actualmente es de: ${this.#precio}`;
    }

}

const precio1 = new Producto(100);
console.log(precio1.getPrecio());
console.log(precio1.setPrecio(200));