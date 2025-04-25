// Crear una clase Escuela con un atributo estático numEstudiantes
// que se incremente cada vez que se cree un nuevo objeto Estudiante

class Escuela{
    static numEstudiantes = 0;
    static empleados = [];

    nuevoEstudiante(){
        Escuela.empleados.push(estudiante);
        console.log(`Hay ${Escuela.numEstudiantes} estudiantes nuevos`); 
        Escuela.numEstudiantes++;
    }
}

const estudiante = new Escuela();
estudiante.nuevoEstudiante();
estudiante.nuevoEstudiante();
estudiante.nuevoEstudiante();
estudiante.nuevoEstudiante();
estudiante.nuevoEstudiante();