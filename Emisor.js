const fs = require('fs');
const crypto = require('crypto');

const mensaje = "Read Dead Rdemption 2";
const clave = "Rockstar";

const hmac = crypto.createHmac('sha256', clave)
                   .update(mensaje)
                   .digest('hex');

const datos ={
    mensaje: mensaje,
    hmac: hmac
};

fs.writeFileSync('MesSafe.json', JSON.stringify (datos, null, 4));

console.log("Mensaje y HMAC guardados en MesSafe.json");