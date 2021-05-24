const { guardarDB, leerDB } = require("./helpers/guardar_datos");
const { 
    inquirerMenu,
    pausa,
    leerInput,
    listadoBorrarTareas,
    confirmar,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");



const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasFile = leerDB();

    if ( tareasFile ){
        tareas.cargarTareasFromArr( tareasFile );
    }

    do {

        opt = await inquirerMenu();
        // console.log(opt);

        switch( opt ){
            case '1':
                const desc = await leerInput('Tarea:');
                tareas.crearTarea(desc);    // Se manda la tarea escrita por el usuario
                break;
            case '2':
                tareas.listarTareas();
                break;
            case '3':
                tareas.listarPendientesCompletadas();
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                break;
            case '6':
                const id = await listadoBorrarTareas( tareas.listadoArr );
                if ( id !== '0' ){
                    const ok = await confirmar('¿Está seguro que desea borrar esta tarea?');
    
                    if ( ok ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada');
                    }
                }
                
                break;
            case '0':
                break;
            default:
                console.log('Seleccione una opción válida');

        }

        guardarDB( tareas.listadoArr );

        if ( opt !== '0' ) await pausa();
        console.log('\n');

    } while( opt !== '0' );

}

main();
