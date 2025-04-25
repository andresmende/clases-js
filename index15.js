//  Crear una clase base Animal con un método hacerSonido()
// y dos subclases Perro y Gato que sobrescriban este método.

class Animal{
    constructor(nombreAnimal){
        this.nombre = nombreAnimal;
    }

    hacerSonido(){
        console.log(`El ${this.nombre} hace un sonido`);
    }
}

class Perro extends Animal{
    constructor(nombre){
        super(nombre);
    }

    hacerSonido(){
        console.log(`El ${this.nombre} hace !Guau¡`);
    }
}

class Gato extends Animal{
    constructor(nombre){
        super(nombre);
    }

    hacerSonido(){
        console.log(`El ${this.nombre} hhace !miau¡`);
    }
}

const animal = new Animal("Animal");
animal.hacerSonido();

const Perro1 = new Perro("Perro");
Perro1.hacerSonido();

const gato1 = new Gato("Gato");
gato1.hacerSonido();