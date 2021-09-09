const fetch = require('node-fetch');
const fs = require('fs');
const { info } = require('console');
const url = 'http://198.168.80.207:4000/'

fetch(url)
    .then(datos => datos.json())
    .then(info => {
        console.log (info);
        const texto = JSON.stringify(info)
        fs.writeFile('./prueba/datos.txt', texto ,(error) => {
            if (error) {throw error}
    })
    console.log("datos guardados");
})
    




