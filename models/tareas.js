require('colors');

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

    borrarTarea(id = ''){
        if (this._listadotareas[id]){
            delete this._listadotareas[id];
        }
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

    listarTareas(){
        
        console.log('');
        for (let i = 0; i < this.listadoArr.length; i++ ){
            process.stdout.write( `${ ((i + 1).toString() + '. ').green }` );
            process.stdout.write(  `${ (this.listadoArr[i].descripcion + ' :: ').cyan }` );
            ( this.listadoArr[i].completadoEn === null )
                ? process.stdout.write(  `Pendiente\n`.red )
                : process.stdout.write(  `Completado\n`.green );
        }
        console.log('');

    }

    listarPendientesCommpletadas( completadas = true ){

        console.log('');

        let numTarea = 1;

        if ( completadas ){
            for (let i = 0; i < this.listadoArr.length; i++ ){
                if ( this.listadoArr[i].completadoEn ){
                    console.log( `${numTarea}. ${this.listadoArr[i].descripcion}`.green );
                    numTarea++;
                }
            }
        } else{
            for (let i = 0; i < this.listadoArr.length; i++ ){
                if ( !this.listadoArr[i].completadoEn ){
                    console.log( `${numTarea}. ${this.listadoArr[i].descripcion}`.green );
                    numTarea++;
                }
            }
        }
        console.log('');
    }

}


module.exports = Tareas;
