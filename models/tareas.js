const Tarea = require("./tarea");

class Tareas {

    _listadotareas = {};

    constructor(){
        this._listadotareas = {};
    }

    crearTarea( descripcion = '' ){

        const tarea = new Tarea(descripcion);

        this._listadotareas[tarea.id] = tarea;      // Crea una nueva tarea dentro del objeto con clave tarea.id y
                                                    // valor un objeto de tipo tarea

    }

}


module.exports = Tareas;
