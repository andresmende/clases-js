// Class Inventario: métodos: ingresarVideojuego, eliminarVideojuego, obtenerTodosVideojuegos, actualizarVideojuego
// Class Admin: propiedades nombre, contraseña, email
// métodos agregarVideojuego → llama al método ingresarVideojuego de Inventario

class Inventario {
  #videoJuegos;

  constructor() {
    this.#videoJuegos = [];
  }

  ingresarJuego(juego) {
    this.#videoJuegos.push(juego);
  }

  eliminarJuego(idJuego) {
    this.#videoJuegos.forEach((item, index) => {
      if (item.id === idJuego) {
        this.#videoJuegos.splice(index, 1);
      }
    });
  }

  obtenerJuegos() {
    return this.#videoJuegos;
  }

  actualizarVideoJuego(idJuego, juego) {
    this.#videoJuegos.forEach((item) => {
      if (item.id === idJuego) {
        item.nombre = juego.nombre;
        item.precio = juego.precio;
        item.categoria = juego.categoria;
      }
    });
  }

}

class Admin extends Inventario {

  constructor(nombre,contraseña,email){
    super();
    this.nombre=nombre;
    this.contraseña=contraseña;
    this.email=email;
  }

  agregarVideoJuego(juego){
    this.ingresarJuego(juego);
  }

  consultarVideojuego(){
    return this.obtenerJuegos();
  }

}


let inventario = new Inventario();

inventario.ingresarJuego({
  id: `1`,
  nombre: `call of duty`,
  precio: 69,
  categoria: `Shooter`,
});

inventario.ingresarJuego({
  id: `2`,
  nombre: `FIFA`,
  precio: 69,
  categoria: `Deportes`,
});

inventario.ingresarJuego({
  id: `3`,
  nombre: `FIFA 2`,
  precio: 69,
  categoria: `Deportes`,
});

console.log("Lista antes de eliminar");
console.log(inventario.obtenerJuegos());

inventario.eliminarJuego("2");

console.log("Lista despues de eliminar");
console.log(inventario.obtenerJuegos());

let videoJuegoActualizar = {
  id: `2`,
  nombre: `FIFA 2025`,
  precio: 80,
  categoria: `Deportes`,
};

inventario.actualizarVideoJuego(`3`, videoJuegoActualizar);

console.log("Lista despues de actualizar");
console.log(inventario.obtenerJuegos());






console.log(`******************************`)


let admin = new Admin ("Andres", "1234", "a@gmail.com");

admin.agregarVideoJuego({
  id: "4",
  nombre: "san andres",
  precio: 71,
  categoria: "viaje"
})

console.log(admin.consultarVideojuego());


