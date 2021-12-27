require('colors');
const { inquireMenu, pause } = require('./helpers/inquire');


console.clear();

const main = async () => {

    let opt = '';
    
    do {

      opt = await inquireMenu();

      await pause();
        
    } while (opt !== '0');

}




main();