//import { rsaKeyPair } from "./rsa"
//import * as rsa from './rsa'
//import * as bigintConversion from 'bigint-conversion'
//import { RsaPublicKey } from '../../types'
//import { RsaPrivateKey } from './rsa'

//import { rsaKeyPair } from "./rsa"

describe('testing function rsa() with .spec.ts file', function () {
  const inputs = ['Hola que tal', 'Int1']
  for (const input of inputs) {
    describe(`mensaje ${input}!`, function () {
      it(`should return "mensaje ${input}!"`, function () {
        let clave: _pkgTypes.rsaKeyPair
        const mensajeCifradoFinal: bigint = clave.publicKey.encrypt(_pkg.bigintConversion.textToBigint(input))       
        const mensajeDescifradoFinal: bigint = clave.privateKey.decrypt((mensajeCifradoFinal))
        chai.expect(mensajeDescifradoFinal).to.equal(`${input}`)
      });
      it(`should return "mensaje ${input}!"`, function () {
       const publickeyRSA: _pkgTypes.RsaPublicKey = new _pkg.RsaPublicKey(65537n, 23242578332494088110761945580548486140597635450032240517944682244925706623739880762894166198291327731637188876993876277295925840286340813505254897464199245244814272818987532731493454084667290305496515854022760348617648539340760685922878606977090302276493724375874959699820473331963794269473306383312373727409188184201984913101871413630533233289571449008794237779841937365888278249527967022741672518629905739301377292098103345583482839320714863489489544244786799520652391837585959725419928931797112224490219606192805577647459725328344302286060144588608564184226621888750722327220942100623872759605526595927414743466971n )
        const privatekeyRSA: _pkgTypes.RsaPrivateKey = new _pkg.RsaPrivateKey( 8587451237362281604498065982382486891502985256985835053504318718870730429943962537081638468734092340111126409013682655270206880032553465343489053316418519681369803348321774227694012499902860482739408805549645529722564989724845190486848384719216085254482491448150453547941665643227052114698973721188425125280040102546875866109123117780365352900797243774626257668852612844518552554633331756618320482222334348054919767805373071709872044878232999311501824102529577448423914015754476575092029067356234565822718779251520258644640667663754428692823648544878009499768197163877114089020554431313294879465719540943904439599841n, 23242578332494088110761945580548486140597635450032240517944682244925706623739880762894166198291327731637188876993876277295925840286340813505254897464199245244814272818987532731493454084667290305496515854022760348617648539340760685922878606977090302276493724375874959699820473331963794269473306383312373727409188184201984913101871413630533233289571449008794237779841937365888278249527967022741672518629905739301377292098103345583482839320714863489489544244786799520652391837585959725419928931797112224490219606192805577647459725328344302286060144588608564184226621888750722327220942100623872759605526595927414743466971n)
        const mensajecifrado: bigint = publickeyRSA.encrypt(_pkg.bigintConversion.textToBigint(input))
     
        const mensajeDescifrada: bigint = privatekeyRSA.decrypt((mensajecifrado))

        chai.expect(mensajeDescifrada).to.equal(`${input}`)
      })
    })
  }
})
