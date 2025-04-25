// Crear una clase base Vehiculo con un método mover(),
// y subclases Coche y Bicicleta que implementen este método de forma diferente.

class Vehiculo{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    mover(){
        console.log(`Mover vehiculo de marca ${this.marca} y de modelo ${this.modelo}`);
    }
}


class coche extends Vehiculo{
    constructor(marca,  modelo){
        super(marca,modelo);
    }

    mover(){
        console.log(`Mover el coche de marca ${this.marca} y de modelo ${this.modelo}`);
    }
}

class Bicicleta extends Vehiculo{
    constructor(marca,modelo){
        super(marca, modelo);
    }

    mover(){
        console.log(`Mover la bicicleta de marca ${this.marca} y de modelo ${this.modelo}`);
    }
}

const vehiculo1= new Vehiculo("Yamaha", "MT-09");
vehiculo1.mover();

const coche1 = new coche("BMW", "serie 3");
coche1.mover();

const bici= new Bicicleta("scott", "Genius");
bici.mover();