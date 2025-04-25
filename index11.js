//  Crear una clase Vehiculo con un atributo privado modelo,
// un atributo público marca, y un método privado encenderMotor()
// que sea usado en el método público arrancar().

class Vehiculo{
    #modelo;
    marca;
    constructor(modelo, marca){
        this.#modelo = modelo;
        this.marca = marca;
    }

    #encerMotor(){
        console.log("Encender Motor del vehiculo");
    }

    arrancar(){
        this.#encerMotor();
        console.log(`Arrancar el vehiculo de marca ${this.#modelo} y modelo ${this.marca}`);
    }
}

const vehicu = new Vehiculo("Honda", "Accord");
vehicu.arrancar();