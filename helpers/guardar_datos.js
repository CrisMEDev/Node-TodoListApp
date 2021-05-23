const fs = require('fs');

const guardarDB = ( data ) => {

    const file = './output/data.json';
    
    fs.writeFileSync( file, JSON.stringify( data ) );

}

module.exports = {
    guardarDB,
};
