# Class: RsaPublicKey

## Table of contents

### Constructors

- [constructor](RsaPublicKey.md#constructor)

### Properties

- [e](RsaPublicKey.md#e)
- [n](RsaPublicKey.md#n)
- [n2](RsaPublicKey.md#n2)

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

[src/ts/rsa.ts:26](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/rsa.ts#L26)

## Properties

### e

• **e**: `bigint`

#### Defined in

[src/ts/rsa.ts:22](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/rsa.ts#L22)

___

### n

• **n**: `bigint`

#### Defined in

[src/ts/rsa.ts:23](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/rsa.ts#L23)

___

### n2

• **n2**: `bigint`

#### Defined in

[src/ts/rsa.ts:24](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/rsa.ts#L24)

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

[src/ts/rsa.ts:32](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/rsa.ts#L32)

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

[src/ts/rsa.ts:36](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/rsa.ts#L36)
