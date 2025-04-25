//  Crear una clase Universidad con un atributo estático 
// numEstudiantes y un método estático registrarEstudiante()

class Universidad{
    static numEstudiantes = 0;

    static registrarEstudiante(){
        this.numEstudiantes++;
    }
}

Universidad.registrarEstudiante();
Universidad.registrarEstudiante();
Universidad.registrarEstudiante();
Universidad.registrarEstudiante();
Universidad.registrarEstudiante();
Universidad.registrarEstudiante();
Universidad.registrarEstudiante();
console.log(Universidad.numEstudiantes + " estudiantes registrados.");