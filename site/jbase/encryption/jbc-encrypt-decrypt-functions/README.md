# jBC ENCRYPT() / DECRYPT() functions 

<PageHeader />

Beginning with jBASE 5.8, the following information applies to the jBC [ENCRYPT()](../../jbc/encrypt/README.md) and [DECRYPT()](../../jbc/decrypt/README.md) functions.

In addition to the symmetric ciphers supported in previous jBASE releases, support has been added for:

* hashing (MD5, SHA1, SHA384, SHA512)
* digital signature (RSA, HMAC)
* signature verification (RSA, HMAC)
* optional IV for symmetric ciphers

```
ENCRYPT(string, key, method, {extra, {password}})
DECRYPT(string, key, method, {extra})
```
The ENCRYPT function encrypts, hashes or signs a string. The DECRYPT function decrypts a string or verifies a digital signature.

The _extra_ and _password_ arguments are optional, and are used for certain ciphers and signature algorithms.

### Status Code

The ENCRYPT and DECRYPT functions will set a _status code_ that can be checked using the **STATUS()** function. It is recommended that the status always be checked when using ENCRYPT and DECRYPT functions. The following status codes are used:

- 0 indicates successful operation
- 1 indicates the method is not recognized
- 2 indicates the encryption operation failed

In the case of status code 2, the **SYSTEM(0)** function will return the last error code from the OpenSSL encryption library.

### Initialization Vector

Many ciphers support the use of an **initialization vector** or **IV**. The IV should be used for block ciphers, and should be a string of random bytes sized to match the block size of the cipher. If the IV is shorter than the block size, it is padded with zero bytes. If it is longer, the extra bytes are discarded. The IV can be shared with the recipient of the encrypted message and does not need to be secret.

### Hashing
The ENCRYPT function can produce a hash, or message digest, of an input string, returning a fixed-size hash of the input. The _key_ argument is not used for the hash methods. The DECRYPT function will fail when used with a hash method.

### Digital Signatures
Digital signatures are supported using HMAC (keyed-hash message authentication code) or RSA public/private key pair. The ENCRYPT function is used to produce the signature of the supplied message, and the return value is the signature. The DECRYPT function is used to verify the signature, and the return value is 1 if the signature is verified or 0 if it is not. When verifying the signature, pass the signature in the _extra_ argument.

If the BASE64 flag is included in the signature algorithm method (e.g. JBASE_SIGN_RSA_SHA256_BASE64), the signature returned by ENCRYPT is base64-encoded, and the signature supplied to DECODE should be base64-encoded.

For HMAC signatures, the key is a string of random bytes. For RSA signature generation, the key is an RSA private key in PEM format. If the private key is encrypted (password-protected), supply the password needed to decrypt the key in the _password_ argument. For RSA signature verification, the key is an RSA public key in PEM format.

### Supported Algorithms
The following symmetric ciphers are supported:
- JBASE\_CRYPT\_GENERAL General-purpose encryption scheme
- JBASE\_CRYPT\_AES128 AES 128 bit algorithm in CBC mode
- JBASE\_CRYPT\_AES128\_CTR AES 128 bit algorithm in CTR mode
- JBASE\_CRYPT\_AES256 AES 256 bit algorithm in CBC mode
- JBASE\_CRYPT\_AES256\_CTR AES 256 bit algorithm in CTR mode
- JBASE\_CRYPT\_AES alias for JBASE\_CRYPT\_AES256
- JBASE\_CRYPT\_AES\_CTR alias for JBASE\_CRYPT\_AES256\_CTR
- JBASE\_CRYPT\_ROT13 Simple ROT13 algorithm (key is not used)
- JBASE\_CRYPT\_XOR11 XOR MOD11 algorithm (uses the first character of a key as a seed value)
- JBASE\_CRYPT\_RC2 RC2 algorithm in CBC mode
- JBASE\_CRYPT\_DES DES algorithm in CBC mode
- JBASE\_CRYPT\_3DES Three key triple DES algorithm in CBC mode
- JBASE\_CRYPT\_BLOWFISH Blowfish algorithm in CBC mode

The following hashing algorithms are supported:
- JBASE\_SECUREHASH\_SHA1 Secure hash algorithm 1
- JBASE\_SECUREHASH\_SHA256 Secure hash algorithm 2, 256 bits
- JBASE\_SECUREHASH\_SHA384 Secure hash algorithm 2, 384 bits
- JBASE\_SECUREHASH\_SHA512 Secure hash algorithm 2, 512 bits
- JBASE\_SECUREHASH\_MD5 MD5 message-digest algorithm

The following RSA signature algorithms are supported:
- JBASE\_SIGN\_RSA\_SHA1 RSA digital signature using SHA1 hash algorithm
- JBASE\_SIGN\_RSA\_SHA256 RSA digital signature using SHA256 hash algorithm
- JBASE\_SIGN\_RSA\_SHA384 RSA digital signature using SHA384 hash algorithm
- JBASE\_SIGN\_RSA\_SHA512 RSA digital signature SHA512 hash algorithm
- JBASE\_SIGN\_RSA\_MD5 RSA digital signature using MD5 hash algorithm

The following HMAC signature algorithms are supported:
- JBASE\_SIGN\_HMAC\_SHA1 Keyed hash message authentication code using SHA1 hash algorithm
- JBASE\_SIGN\_HMAC\_SHA256 Keyed hash message authentication code using SHA256 hash algorithm
- JBASE\_SIGN\_HMAC\_SHA384 Keyed hash message authentication code using SHA384 hash algorithm
- JBASE\_SIGN\_HMAC\_SHA512 Keyed hash message authentication code using SHA512 hash algorithm
- JBASE\_SIGN\_HMAC\_MD5 Keyed hash message authentication code using MD5 hash algorithm

The following encodings are supported:
- JBASE\_CRYPT\_BASE64

When used with ENCRYPT, returns the input string encoded using base64. When used with DECRYPT, decodes the base64 input string into its original (binary) content.
- JBASE\_CRYPT\_BASE64\_MASK

The base64 mask can be combined with any of the cipher, hash or signature methods. Each of the above constants has a _BASE64 version available. For example to use ASE256 with base64 encoding, use the JBASE_CRYPT_AES256_BASE64 method.

For symmetric ciphers, when the _BASE64 version is used, the ENCRYPT function returns the encrypted result using encoded in base64. For DECRYPT, the input string is decoded from base64 before decryption. For hash methods, the ENCRYPT function returns the hash encoded in base64. For signature algorithms, the ENCRYPT function returns the signature is encoded in base64, and the signature is passed to the DECRYPT function encoded in base64.

### **WARNING!**

Several of the cipher methods supported by the ENCRYPT function are considered insecure by modern standards. These ciphers are included only for compatibility with existing applications. These insecure ciphers should not be used when developing new applications:

- JBASE_CRYPT_GENERAL
- JBASE_CRYPT_ROT13
- JBASE_CRYPT_XOR11
- JBASE_CRYPT_DES
- JBASE_CRYPT_3DES

Due to small block size or small key size, these ciphers are not recommended for new applications:

- JBASE_CRYPT_RC2
- JBASE_CRYPT_BLOWFISH

For best security, AES ciphers are recommended:

- JBASE_CRYPT_AES128
- JBASE_CRYPT_AES128_CTR
- JBASE_CRYPT_AES256
- JBASE_CRYPT_AES256_CTR
- JBASE_CRYPT_AES
- JBASE_CRYPT_AES_CTR


Back to [Encryption](./../README.md)

<PageFooter />
