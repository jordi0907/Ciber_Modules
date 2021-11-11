# Class: RsaPrivateKey

## Table of contents

### Constructors

- [constructor](RsaPrivateKey.md#constructor)

### Properties

- [d](RsaPrivateKey.md#d)
- [n](RsaPrivateKey.md#n)

### Methods

- [decrypt](RsaPrivateKey.md#decrypt)
- [sign](RsaPrivateKey.md#sign)

## Constructors

### constructor

• **new RsaPrivateKey**(`d`, `n`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `bigint` |
| `n` | `bigint` |

#### Defined in

[src/ts/rsa.ts:7](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/rsa.ts#L7)

## Properties

### d

• **d**: `bigint`

#### Defined in

[src/ts/rsa.ts:4](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/rsa.ts#L4)

___

### n

• **n**: `bigint`

#### Defined in

[src/ts/rsa.ts:5](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/rsa.ts#L5)

## Methods

### decrypt

▸ **decrypt**(`c`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `bigint` |

#### Returns

`bigint`

#### Defined in

[src/ts/rsa.ts:12](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/rsa.ts#L12)

___

### sign

▸ **sign**(`m`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `bigint` |

#### Returns

`bigint`

#### Defined in

[src/ts/rsa.ts:16](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/rsa.ts#L16)
