require('colors');
const inquirer = require('inquirer');

const menuOptions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            `${'1.'.blue.italic.bold} ${'Crear tarea'.italic.magenta}`,
            `${'2.'.blue.italic.bold} ${'Listar tareas'.italic.magenta}`,
            `${'3.'.blue.italic.bold} ${'Listar tareas completadas'.italic.magenta}`,
            `${'4.'.blue.italic.bold} ${'Listar tareas pendientes'.italic.magenta}`,
            `${'5.'.blue.italic.bold} ${'Completar tarea(s)'.italic.magenta}`,
            `${'6.'.blue.italic.bold} ${'Borrar tarea'.italic.magenta}`,
            `${'0.'.blue.italic.bold} ${'Salir'.italic.magenta}`
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('**************************'.cyan);
    console.log('  Seleccione una opción'.green);
    console.log('**************************\n'.cyan);

    return optSelected = await inquirer.prompt(menuOptions);

}


module.exports = {
    inquirerMenu,
}

