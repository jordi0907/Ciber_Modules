/**
 * My module description. Please update with your module data.
 *
 * @remarks
 * This module runs perfectly in node.js and browsers
 *
 * @packageDocumentation
 */

export { helloWorld } from './hello-world'
// export * as rsa from './rsa'
export { rsaKeyPair, RsaPublicKey, RsaPrivateKey, generateKeys } from './rsa'
// export * from 'bigint-crypto-utils'
// export * as bigintConversion from 'bigint-conversion'

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
