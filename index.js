const { crearArchivo } = require('./helpers/multiplicar.js');
var colors = require('colors');
const argv = require('yargs').options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
}).check((argv, options) => {
    console.log('yars', argv);
}).argv;
console.clear();

var numero = 10;
var digito = 8;


console.log(argv);
//console.log(process.argv);

console.log(('base:yargs', argv.b));

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

// crearArchivo(digito, numero)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));

console.log("hola mundo".underline.red);