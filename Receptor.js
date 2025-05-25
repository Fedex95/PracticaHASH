const fs = require('fs');
const crypto = require('crypto');

const clave = "Rockstar";

const datos = JSON.parse(fs.readFileSync('MesSafe.json', 'utf8'));
const mRecibido = datos.mensaje;
const hmacRecibido = datos.hmac;

const hmVerificado = crypto.createHmac('sha256', clave)
    .update(mRecibido)
    .digest('hex');

if (hmVerificado === hmacRecibido) {
    console.log("El mensaje es auténtico");
} else {
    console.log("El mensaje no es auténtico o la clave no es correcta");
}
