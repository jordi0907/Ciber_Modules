# @my-scope/my-package-name - v0.9.4

My module description. Please update with your module data.

**`remarks`**
This module runs perfectly in node.js and browsers

## Table of contents

### Namespaces

- [bigintConversion](modules/bigintConversion.md)

### Classes

- [RsaPrivateKey](classes/RsaPrivateKey.md)
- [RsaPublicKey](classes/RsaPublicKey.md)

### Interfaces

- [rsaKeyPair](interfaces/rsaKeyPair.md)

### Functions

- [generateKeys](API.md#generatekeys)
- [helloWorld](API.md#helloworld)

## Functions

### generateKeys

▸ `Const` **generateKeys**(`bitLength`): `Promise`<[`rsaKeyPair`](interfaces/rsaKeyPair.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitLength` | `number` |

#### Returns

`Promise`<[`rsaKeyPair`](interfaces/rsaKeyPair.md)\>

#### Defined in

[src/ts/rsa.ts:46](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/rsa.ts#L46)

___

### helloWorld

▸ **helloWorld**(`name`): `string`

Returns the a Hello to the input string name

**`remarks`** An example function that runs different code in Node and Browser javascript

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name to say hello to |

#### Returns

`string`

A gratifying Hello to the input name

#### Defined in

[src/ts/hello-world.ts:11](https://github.com/jordi0907/Ciber_Modules/blob/f2e04d0/src/ts/hello-world.ts#L11)
