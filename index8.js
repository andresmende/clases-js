// Crear una clase Empleado con atributos nombre y salario.
// Que implemente un método trabajar(). Implemente encapsulación.

class Empleado{

    #nombre;
    #salario;
    constructor(nombre, salario){
        this.#nombre = nombre;
        this.#salario = salario;
    }

    getnombre(){
        return this.#nombre;
    }

    setnombre(){
        this.#nombre = nuevoNombre;
    }

    getSalario(){
        return this.#salario;
    }

    setSalario(nuevoSalario){
        if (nuevoSalario > 0) {
            this.#salario = nuevoSalario;
        } else {
            console.log("Salario insuficiente");
        }
    }

    trabajar(){
        console.log(`${this.#nombre} esta trabajando y tiene un salario de ${this.#salario}`);
    }
}

const Empleado1= new Empleado("Juan", 2000);
const Empleado2= new Empleado("carlos", 1000);

Empleado1.trabajar();
Empleado2.trabajar();