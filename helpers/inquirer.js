require('colors');
const inquirer = require('inquirer');

const menuOptions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        suffix: 'Use las flechas arriba y abajo',
        choices: [

            {
                value: '1',
                name: `${'1.'.blue.italic.bold} ${'Crear tarea'.italic.magenta}`
            },
            {
                value: '2',
                name: `${'2.'.blue.italic.bold} ${'Listar tareas'.italic.magenta}`
            },
            {
                value: '3',
                name: `${'3.'.blue.italic.bold} ${'Listar tareas completadas'.italic.magenta}`
            },
            {
                value: '4',
                name: `${'4.'.blue.italic.bold} ${'Listar tareas pendientes'.italic.magenta}`
            },
            {
                value: '5',
                name: `${'5.'.blue.italic.bold} ${'Completar tarea(s)'.italic.magenta}`
            },
            {
                value: '6',
                name: `${'6.'.blue.italic.bold} ${'Borrar tarea'.italic.magenta}`
            },
            {
                value: '0',
                name: `${'0.'.blue.italic.bold} ${'Salir'.italic.magenta}`
            }
            
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('**************************'.cyan);
    console.log('  Seleccione una opción'.green);
    console.log('**************************\n'.cyan);

    // De acuerdo al name asignado, se aplica desestructuración de objetos
    const {opcion} = optSelected = await inquirer.prompt(menuOptions);

    return opcion;
}

const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.yellow} para continuar`
        }
    ];

    await inquirer.prompt(question);

}

const leerInput = async( mensaje ) => {
    const question = [
        {
            type: 'input',
            name: 'descripcion',
            message: mensaje,
            validate( value ){
                if ( value.length === 0 ){
                    return 'Por favor, ingrese una tarea';
                }
                return true;    // La validación pasó
            }

        }
    ];

    const { descripcion } = await inquirer.prompt(question);
    return descripcion;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}

