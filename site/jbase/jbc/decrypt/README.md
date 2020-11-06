# DECRYPT

<PageHeader />

**Tags:**
<badge text='encryption' vertical='middle' />

## Description

This function decrypts strings. It also is used to verify digital signatures. It takes the general form:

```
DECRYPT(string, key, method, {extra})
```

Where:

- **string** specifies the string to be encrypted.
- **key** is the value used to encrypt the string. Its use depends on method.
- **method** is a value which indicates the encryption or signature algorithm to use.

The **extra** argument is optional, and is used for certain ciphers and signature algorithms.

The ENCRYPT and DECRYPT functions will set a status code that can be checked using the **STATUS()** function. It is recommended that the status always be checked when using ENCRYPT and DECRYPT functions. The following status codes are used:

- 0 indicates successful operation
- 1 indicates the method is not recognized
- 2 indicates the encryption operation failed

In the case of status code 2, **SYSTEM(0)** will return the last error code from the OpenSSL encryption library.

Please refer to [this page](../../../jbase/encryption/jbc-encrypt-decrypt-functions/README.md) for a complete description of Initialization Vectors, Hashing, Digital Signatures, Warnings and a list of supported Algorithms (ciphers).

An example of use may be as follows:

```
INCLUDE JBC.h
cipher = JBASE_CRYPT_AES256
jkey = "Thunderbirds 2086"
str = "This is the string to be encrypted"
enc = ENCRYPT( str, jkey, cipher )
CRT "Encrypted:" :enc
dec = DECRYPT( enc, jkey, cipher )
CRT "Decrypted: ":dec
```

The above will display as output:

```
Encrypted: ▐∞╞/áj╢c─B≤Γ5¿µ_7æ♠╞v┐≤«►▼│├ZüC╕òæ▼.∩éôU,Ü╝»
Decrypted: This is the string to be encrypted
```

See also: [ENCRYPT](./../encrypt).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
