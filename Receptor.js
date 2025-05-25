const fs = require('fs');
const crypto = require('crypto');

// Define la clave secreta que debería ser igual a la usada por el emisor
const clave = "Rockstar";

// Lee el archivo 'MesSafe.json' que contiene el mensaje y su HMAC generado por el emisor
const datos = JSON.parse(fs.readFileSync('MesSafe.json', 'utf8'));

// Extrae el mensaje y el HMAC del objeto leído
const mRecibido = datos.mensaje;
const hmacRecibido = datos.hmac;

// Vuelve a calcular el HMAC localmente con la misma clave y el mensaje recibido
const hmVerificado = crypto.createHmac('sha256', clave)
    .update(mRecibido)
    .digest('hex');

// Compara el HMAC calculado con el HMAC recibido
// Si son iguales, el mensaje es auténtico
// Si son diferentes, el mensaje no es auténtico o la clave no es correcta
if (hmVerificado === hmacRecibido) {
    console.log("El mensaje es auténtico");
} else {
    console.log("El mensaje no es auténtico o la clave no es correcta");
}
