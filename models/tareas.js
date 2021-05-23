const Tarea = require("./tarea");

class Tareas {

    _listadotareas = {};

    get listadoArr(){
        const listado = [];

        Object.keys(this._listadotareas).forEach( ( key ) => { // Extrae cada una de las llaves en el objeto y las cicla
            listado.push(this._listadotareas[key]);
        });

        return listado;
    }
    
    constructor(){
        this._listadotareas = {};
    }

    cargarTareasFromArr(tareas = []){
        tareas.forEach((tarea) => {
            this._listadotareas[tarea.id] = tarea;
        });
    }

    crearTarea( descripcion = '' ){

        const tarea = new Tarea(descripcion);

        this._listadotareas[tarea.id] = tarea;      // Crea una nueva tarea dentro del objeto con clave tarea.id y
                                                    // valor un objeto de tipo tarea

    }

}


module.exports = Tareas;
