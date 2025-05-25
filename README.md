# Simulación de Mensajería Segura con HMAC

Este proyecto demuestra una simulación básica de autenticación de mensajes mediante el uso de HMAC utilizando Node.js. Se emulan dos roles: el **emisor** y el **receptor**, quienes intercambian mensajes autenticados mediante una clave secreta compartida.

---

## Archivos 

- **Emisor.js**: Genera un mensaje con su HMAC y lo guarda en **MesSafe.json**.
- **MesSafe.json**: Contiene el mensaje y su HMAC calculado.
- **Receptor.js**: Verifica si el mensaje recibido es auténtico comparando el HMAC.

---


## Instrucciones de uso

### 1. Ejecutar el emisor

node Emisor.js
El mensaje se guardará en el archivo **MesSafe.json**

### 2. Ejecutar el Receptor.js

node Receptor.js

### 3. Verificar los mensajes en consola
En el caso de que salga en pantalla el mensaje *"El mensaje es autentico"*, significa que el mensaje no ha sido
modificado y que todo esta tal y como el emisor escribio. Por otro lado, si sale en pantalla el mensaje
*"El mensaje no es autentico o la clave es no es correcta"*, significa que el mensaje probablemente haya sido modificado o que la clave ingresada no es la correcta, verificando asi la autenticacion del mensaje.
