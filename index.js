const { guardarDB, leerDB } = require("./helpers/guardar_datos");
const { 
    inquirerMenu,
    pausa,
    leerInput
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
                console.log( tareas._listadotareas );
                break;
            case '3':
                break;
            case '4':
                break;
            case '5':
                break;
            case '6':
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
