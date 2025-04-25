//  Crear una clase Empleado y una subclase Gerente que sobrescriba un método trabajar()

class Empleado{

    constructor(nombre){
        this.nombre = nombre;
    }

    getnombre1(){
        return this.nombre;
    }

    trabajar(){
        console.log(`${this.getnombre1()} esta trabajando.`);
    }
}

class Gerente extends Empleado{
    constructor(nombre){
        super(nombre);
    }

    trabajar(){
        console.log(`El gerente le pidio a ${this.getnombre1()} que trabaje`);
    }
}

const emp2= new Empleado("Gabriel")
emp2.trabajar();

const emp = new Gerente("Gabriel");
emp.trabajar();