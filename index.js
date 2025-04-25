// Crear una clase Persona con un atributo nombre y un método caminar() que imprima un mensaje con el nombre.

class persona {
    constructor(nombre){
        this._nombre=nombre;
    }
    caminar(){
        console.log(`${this._nombre} esta caminando`);
    }
}

const persona1 = new persona(`andres`)
const persona2 = new persona (`carlos`);

persona1.caminar()
persona2.caminar()

