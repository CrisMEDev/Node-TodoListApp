const { v4: uuidv4 } = require('uuid'); // Se obtiene el paquete v4 de uuid con el nombre uuidv4


class Tarea {

    // La declaración no es necesaria en este punto, solo se colocó como similitud a otros lenguajes
    id = '';
    descripcion = '';
    completadoEn = null;

    constructor( descripcion ){
        this.id = uuidv4();
        this.descripcion = descripcion;
        this.completadoEn = null;
    }

}



module.exports = Tarea;
