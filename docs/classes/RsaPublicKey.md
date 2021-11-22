# Class: RsaPublicKey

## Table of contents

### Constructors

- [constructor](RsaPublicKey.md#constructor)

### Properties

- [e](RsaPublicKey.md#e)
- [n](RsaPublicKey.md#n)

### Methods

- [encrypt](RsaPublicKey.md#encrypt)
- [verify](RsaPublicKey.md#verify)

## Constructors

### constructor

• **new RsaPublicKey**(`e`, `n`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `bigint` |
| `n` | `bigint` |

#### Defined in

[rsa.ts:25](https://github.com/jordi0907/Ciber_Modules/blob/c8a5aa2/src/ts/rsa.ts#L25)

## Properties

### e

• **e**: `bigint`

#### Defined in

[rsa.ts:22](https://github.com/jordi0907/Ciber_Modules/blob/c8a5aa2/src/ts/rsa.ts#L22)

___

### n

• **n**: `bigint`

#### Defined in

[rsa.ts:23](https://github.com/jordi0907/Ciber_Modules/blob/c8a5aa2/src/ts/rsa.ts#L23)

## Methods

### encrypt

▸ **encrypt**(`m`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `bigint` |

#### Returns

`bigint`

#### Defined in

[rsa.ts:30](https://github.com/jordi0907/Ciber_Modules/blob/c8a5aa2/src/ts/rsa.ts#L30)

___

### verify

▸ **verify**(`s`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `bigint` |

#### Returns

`bigint`

#### Defined in

[rsa.ts:34](https://github.com/jordi0907/Ciber_Modules/blob/c8a5aa2/src/ts/rsa.ts#L34)
