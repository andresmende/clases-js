// Crear una clase base InstrumentoMusical con un método tocar() que debe ser implementado por las clases hijas.

class InstrumentoMusical{

    constructor(nombre){
        this.nombre = nombre;
    }

    tocar(){
    }
}

class Guitarra extends InstrumentoMusical{
    constructor(nombre, color){
        super(nombre);
        this.color = color;
    }
    tocar(){
        console.log(`El es instrumento es: ${this.nombre} y es de color ${this.color} y esta tocando.`);
    }
}

class piano extends Guitarra{
    constructor(nombre, color, teclas){
        super(nombre, color);
        this.teclas = teclas;
    }

    tocar(){
        console.log(`El instrumento es: ${this.nombre}, es de color ${this.color}, tiene ${this.teclas} teclas y esta tocando`);
        
    }
}

const instrumento = new Guitarra("Guitarra","azul");
instrumento.tocar();

const instrumento2= new piano("piano", "rojo", 88)
instrumento2.tocar();