const fs = require('fs');
const crypto = require('crypto');

// Se define el mensaje y clave
const mensaje = "Read Dead Rdemption 2";
const clave = "Rockstar";

// Crea un HMAC usando el algoritmo SHA-256, la clave secreta y el mensaje que luego lo convierte a hexadecimal
const hmac = crypto.createHmac('sha256', clave)
                   .update(mensaje)
                   .digest('hex');

//Agrega el mensaje y el HMAC a un objeto         
const datos ={
    mensaje: mensaje,
    hmac: hmac
};

// Guarda el objeto en un archivo JSON
// Se utiliza JSON.stringify para convertir el objeto a una cadena JSON
fs.writeFileSync('MesSafe.json', JSON.stringify (datos, null, 4));

console.log("Mensaje y HMAC guardados en MesSafe.json");