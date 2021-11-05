/**
 * My module description. Please update with your module data.
 *
 * @remarks
 * This module runs perfectly in node.js and browsers
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigintConversion = exports.generateKeys = exports.RsaPrivateKey = exports.RsaPublicKey = exports.helloWorld = void 0;
const tslib_1 = require("tslib");
var hello_world_1 = require("./hello-world");
Object.defineProperty(exports, "helloWorld", { enumerable: true, get: function () { return hello_world_1.helloWorld; } });
//export * as rsa from './rsa'
var rsa_1 = require("./rsa");
Object.defineProperty(exports, "RsaPublicKey", { enumerable: true, get: function () { return rsa_1.RsaPublicKey; } });
Object.defineProperty(exports, "RsaPrivateKey", { enumerable: true, get: function () { return rsa_1.RsaPrivateKey; } });
Object.defineProperty(exports, "generateKeys", { enumerable: true, get: function () { return rsa_1.generateKeys; } });
//export * from 'bigint-crypto-utils'
exports.bigintConversion = (0, tslib_1.__importStar)(require("bigint-conversion"));
/* import * as rsa from './rsa'
import * as bigintConversion from 'bigint-conversion'

let keyRSA: rsa.rsaKeyPair
let mensaje = "hola que tal, como estas"

if (keyRSA === undefined){
  rsa.generateKeys(2048).then(data=>{
      console.log ("data", data)
      keyRSA = data
      console.log("publica", keyRSA)
    

      //const firma: bigint = keyRSA.privateKey.sign(bigintConversion.hexToBigint("pepe"))

      
       console.log("mensaje", mensaje)
      const mensajecifrado: bigint = keyRSA.publicKey.encrypt(bigintConversion.textToBigint(mensaje))
      console.log("mensaje cifrado", mensajecifrado)
      //const claveDescifradaBigint: bigint = keyRSA.privateKey.decrypt(bigintConversion.hexToBigint(clavecifradaBigint as unknown as string))
      const mensajeDescifrada: bigint = keyRSA.privateKey.decrypt((mensajecifrado))
      const mensajeFinal: string = bigintConversion.bigintToText(mensajeDescifrada)
  }
  );
} */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnJvd3Nlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpudWxsLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFTQSw2Q0FBMEM7QUFBakMseUdBQUEsVUFBVSxPQUFBO0FBQ25CO0FBQ0EsNkJBQTZFO0FBQXZELG1HQUFBLFlBQVksT0FBQTtBQUFFLG9HQUFBLGFBQWEsT0FBQTtBQUFFLG1HQUFBLFlBQVksT0FBQTtBQUMvRDtBQUNBLG1GQUFxRDtBQUdyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
