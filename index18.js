// Crear una clase base Empleado con un atributo
// estático totalEmpleados que se incremente cada vez
// que se cree un Empleado o un Gerente.

class Empleado{
    static totalEmpleados = 0;

        constructor(){
            Empleado.totalEmpleados++;
        }

        static getTotalEmpleados(){
            return Empleado.totalEmpleados;
        }
}


class Gerente extends Empleado{
    constructor(){
        super();
    }
}

const emp1 = new Empleado();
const emp2 = new Empleado();
const emp3 = new Empleado();
const emp4 = new Empleado();

const gere1 = new Gerente();
const gere2 = new Gerente();
const gere3 = new Gerente();
const gere4 = new Gerente();

console.log(`Total de empleados (incluyendo gerentes): ${Empleado.getTotalEmpleados()}`);