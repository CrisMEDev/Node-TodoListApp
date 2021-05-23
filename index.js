const { inquirerMenu, pausa } = require("./helpers/inquirer");


console.clear();

const main = async() => {

    let opt = '';

    do {

        opt = await inquirerMenu();
        console.log(opt);

        if ( opt !== '0' ) await pausa();
        console.log('\n');

    } while( opt !== '0' );

}

main();
