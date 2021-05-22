require('colors');

const mostrarMenu = () => {

    console.log('**************************'.cyan);
    console.log('  Seleccione una opción'.green);
    console.log('**************************\n'.cyan);


    console.log(`${'1.'.yellow} Crear tarea`);
    console.log(`${'2.'.yellow} Listar tareas`);
    console.log(`${'3.'.yellow} Listar tareas completadas`);
    console.log(`${'4.'.yellow} Listar tareas pendientes`);
    console.log(`${'5.'.yellow} Completar tarea(s)`);
    console.log(`${'6.'.yellow} Borrar tarea`);
    console.log(`${'0.'.yellow} Salir\n`);

    // Se prepara la entrada para los datos
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.question('Seleccione una opción: ', (respuestaUsuario) => {
        readLine.close();
    });
}

const pausa = () => {
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, (respuestaUsuario) => {
        readLine.close();
    });
};



module.exports = {
    mostrarMenu,
    pausa,
}
