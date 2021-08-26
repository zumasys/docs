# ENCRYPT

<PageHeader />

**Tags:**
<badge text='encryption' vertical='middle' />

## Description

This function encrypts, hashes or signs a string. It takes the general form:

```
ENCRYPT(string, key, method, {extra, {password}}))
```
Where:

- **string** specifies the string to be encrypted, hashed or signed.
- **key** is the value used to encrypt or sign the string. Its use depends on method.
- **method** is a value which indicates the encryption, hash or signature algorithm to use.

The **extra** and **password** arguments are optional, and are used for certain ciphers and signature algorithms.

The **ENCRYPT** and **DECRYPT** functions will set a status code that can be checked using the **STATUS()** function.  

It is recommended that the status always be checked when using **ENCRYPT** and **DECRYPT** functions. The following status codes are used:

- 0 indicates successful operation
- 1 indicates the method is not recognized
- 2 indicates the encryption operation failed

In the case of status code 2, **SYSTEM(0)** will return the last error code from the OpenSSL encryption library.

Please refer to [this page](../../../jbase/encryption/jbc-encrypt-decrypt-functions/README.md) for a complete description of Initialization Vectors, hashing, Digital Signatures and a list of supported Algorithms (ciphers).

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
````

See also: [DECRYPT](./../decrypt/README.md)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
