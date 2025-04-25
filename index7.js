//  Crear una clase Coche con un método privado encenderMotor()
// y un método público conducir() que llame al método privado.

class Coche{

    #encenderMotor(){
        console.log("Motor encendido");
    }

    conducir(){
        this.#encenderMotor();
        console.log("Coche en movimiento");
        
    }
}

const coche1 = new Coche();
coche1.conducir();