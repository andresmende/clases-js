// Crear una clase base Vehiculo que tenga un constructor con
// parámetros de peso y velocidad máxima, e implemente un método mover()
// que imprima un mensaje genérico. Luego, crear dos subclases Carro y Bicicleta

class Vehiculo{
    constructor(peso, velocidadMax){
        this.peso = peso,
        this.velocidadMax = velocidadMax;
    }

    mover(){
        console.log(`los vehiculo son: carro y bicicleta`);
    }
}

class Carro extends Vehiculo{
    constructor(peso, velocidadMax){
        super(peso,  velocidadMax);
    }
}

class Bicicleta extends Vehiculo{
    constructor(peso, velocidadMax){
        super(peso, velocidadMax);
    }
}

let Vehiculo1 = new Carro("el peso del vehiculo es:" + 123, "su velocidad maxima es:" + 280 + "k/h");
console.log(Vehiculo1.peso);
console.log(Vehiculo1.velocidadMax);

console.log("--------------------------------");


let Vehiculo2 = new Bicicleta("el peso del vehiculo es:" + 20, "su velocidad maxima es:" + 60 + "k/h");
console.log(Vehiculo2.peso);
console.log(Vehiculo2.velocidadMax);

Vehiculo1.mover();