//Requireds
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');



let listarTabla = (base, limite = 10) => {

    console.log('========================'.green);
    console.log(` Tabla de ${base}  `.green);
    console.log('========================'.green);


    
    return new Promise((resolve, reject) => {
        if(!Number(base) || !Number(limite)){
            reject(`El valor introducido para base o el limite no es un numero`);
            return;
        }

        let datos = '';

        fs.readFile(`tablas/tabla-${base}.txt`, (err) => {
            if(err){
                console.log('El archivo no existe')
            }else {
                for(let i=1; i <= limite; i++){
                    datos += `${base} * ${i} = ${base*i}\n`;
                }
                resolve(console.log(datos))
            }
            
        })

    })


}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido "${base}" no es un numero`);
            return;
        }

        let data = '';

        for(let i=1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt` , data, (err) => {

            if (err) {
                reject (err);
            }else{
                resolve(`tabla-${base}-al-${limite}`.green)
            } 
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}
