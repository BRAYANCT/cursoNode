const fs = require('fs');

const crearArchivo = async(digito = 6, numero) => {

    console.log("=======================");
    console.log(` Tabla del ${digito}`);
    console.log("=======================");

    let salida = "";
    try {
        for (var i = 0; i < numero; i++) {
            let resultado = i * digito;
            salida += (`${digito} x ${i}= ${resultado} \n`);
        }
        fs.writeFileSync(`tabla-${digito}.txt`, salida);
        return salida;
    } catch (error) {
        console.log(error);
    }


};

module.exports = {
    crearArchivo
}