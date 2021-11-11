# Namespace: bigintConversion

Conversions from/to bingint to TypedArray/Buffer, hex

**`remarks`**
This module runs perfectly in node.js and browsers

## Table of contents

### Type aliases

- [TypedArray](bigintConversion.md#typedarray)

### Functions

- [base64ToBigint](bigintConversion.md#base64tobigint)
- [bigintToBase64](bigintConversion.md#biginttobase64)
- [bigintToBuf](bigintConversion.md#biginttobuf)
- [bigintToHex](bigintConversion.md#biginttohex)
- [bigintToText](bigintConversion.md#biginttotext)
- [bufToBigint](bigintConversion.md#buftobigint)
- [bufToHex](bigintConversion.md#buftohex)
- [bufToText](bigintConversion.md#buftotext)
- [hexToBigint](bigintConversion.md#hextobigint)
- [hexToBuf](bigintConversion.md#hextobuf)
- [textToBigint](bigintConversion.md#texttobigint)
- [textToBuf](bigintConversion.md#texttobuf)

## Type aliases

### TypedArray

Ƭ **TypedArray**: `Int8Array` \| `Uint8Array` \| `Uint8ClampedArray` \| `Int16Array` \| `Uint16Array` \| `Int32Array` \| `Uint32Array` \| `Float32Array` \| `Float64Array` \| `BigInt64Array` \| `BigUint64Array`

A TypedArray object describes an array-like view of an underlying binary data buffer.

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:13

## Functions

### base64ToBigint

▸ **base64ToBigint**(`a`): `bigint`

Converts a base64 string to bigint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `string` | base64 string. It accepts standard and URL-safe base64 with and without padding |

#### Returns

`bigint`

a bigint

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:121

___

### bigintToBase64

▸ **bigintToBase64**(`a`, `urlsafe?`, `padding?`): `string`

Converts an arbitrary-size non-negative bigint to a base64 string

**`throws`** {RangeError}
Thrown if a < 0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | a non negative bigint |
| `urlsafe?` | `boolean` | if true Base64 URL encoding is used ('+' and '/' are replaced by '-', '_') |
| `padding?` | `boolean` | if false, padding (trailing '=') is removed |

#### Returns

`string`

a base64 representation of the input bigint

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:115

___

### bigintToBuf

▸ **bigintToBuf**(`a`, `returnArrayBuffer?`): `ArrayBuffer` \| `Buffer`

Converts an arbitrary-size non-negative bigint to an ArrayBuffer or a Buffer (default for Node.js)

**`throws`** {RangeError}
Thrown if a < 0.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` |  |
| `returnArrayBuffer?` | `boolean` | In Node.js, it forces the output to be an ArrayBuffer instead of a Buffer. |

#### Returns

`ArrayBuffer` \| `Buffer`

an ArrayBuffer or a Buffer with a binary representation of the input bigint

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:25

___

### bigintToHex

▸ **bigintToHex**(`a`): `string`

Converts a non-negative bigint to a hexadecimal string

**`throws`** {RangeError}
Thrown if a < 0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | a non negative bigint |

#### Returns

`string`

hexadecimal representation of the input bigint

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:40

___

### bigintToText

▸ **bigintToText**(`a`): `string`

Converts a non-negative bigint representing a binary array of utf-8 encoded text to a string of utf-8 text

**`throws`** {RangeError}
Thrown if a < 0.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `bigint` | A non-negative bigint representing a binary array of utf-8 encoded text. |

#### Returns

`string`

a string text with utf-8 encoding

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:59

___

### bufToBigint

▸ **bufToBigint**(`buf`): `bigint`

Converts an ArrayBuffer, TypedArray or Buffer (node.js) to a bigint

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `ArrayBuffer` \| `Buffer` \| [`TypedArray`](bigintConversion.md#typedarray) |

#### Returns

`bigint`

a bigint

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:31

___

### bufToHex

▸ **bufToHex**(`buf`): `string`

Returns the hexadecimal representation of a buffer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `ArrayBuffer` \| `Buffer` \| [`TypedArray`](bigintConversion.md#typedarray) |

#### Returns

`string`

a string with a hexadecimal representation of the input buffer

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:92

___

### bufToText

▸ **bufToText**(`buf`): `string`

Converts an ArrayBuffer, TypedArray or Buffer (in Node.js) containing utf-8 encoded text to a string of utf-8 text

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buf` | `ArrayBuffer` \| `Buffer` \| [`TypedArray`](bigintConversion.md#typedarray) | A buffer containing utf-8 encoded text |

#### Returns

`string`

a string text with utf-8 encoding

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:75

___

### hexToBigint

▸ **hexToBigint**(`hexStr`): `bigint`

Converts a hexadecimal string to a bigint

#### Parameters

| Name | Type |
| :------ | :------ |
| `hexStr` | `string` |

#### Returns

`bigint`

a bigint

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:48

___

### hexToBuf

▸ **hexToBuf**(`hexStr`, `returnArrayBuffer?`): `ArrayBuffer` \| `Buffer`

Converts a hexadecimal string to a buffer

**`throws`** {RangeError}
Thrown if hexStr is undefined or not a hexadecimal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hexStr` | `string` | A string representing a number with hexadecimal notation |
| `returnArrayBuffer?` | `boolean` | In Node.js, it forces the output to be an ArrayBuffer instead of a Buffer. |

#### Returns

`ArrayBuffer` \| `Buffer`

An ArrayBuffer or a Buffer

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:104

___

### textToBigint

▸ **textToBigint**(`text`): `bigint`

Converts a utf-8 string to a bigint (from its binary representaion)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | A string text with utf-8 encoding |

#### Returns

`bigint`

a bigint representing a binary array of the input utf-8 encoded text

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:67

___

### textToBuf

▸ **textToBuf**(`str`, `returnArrayBuffer?`): `ArrayBuffer` \| `Buffer`

Converts a string of utf-8 encoded text to an ArrayBuffer or a Buffer (default in Node.js)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | A string of text (with utf-8 encoding) |
| `returnArrayBuffer?` | `boolean` | When invoked in Node.js, it can force the output to be an ArrayBuffer instead of a Buffer. |

#### Returns

`ArrayBuffer` \| `Buffer`

an ArrayBuffer or a Buffer containing the utf-8 encoded text

#### Defined in

node_modules/bigint-conversion/types/index.d.ts:84
