# ENCRYPT

**Created At:** 8/17/2017 2:19:26 PM  
**Updated At:** 10/25/2018 7:47:58 AM  
**Original Doc:** [267804-encrypt](https://docs.jbase.com/36868-jbase-basic/267804-encrypt)  
**Original ID:** 267804  
**Internal:** No  

**Tags:**
<badge text='encryption' vertical='middle' />

## Description

This function encrypts strings. It takes the general form:

```
ENCRYPT(string, key, method)
```

Where:

- **string** specifies the string to be encrypted.
- **key** is the value used to encrypt the string. Its use depends on **method**.
- **method** is a value which indicates the encryption mechanism to.

The **ENCRYPT** and [DECRYPT](./../decrypt) functions that are part of jBASE BASIC now support the following  cipher methods (Defined in **JBC.h**)

- JBASE\_CRYPT\_GENERAL General-purpose encryption scheme
- JBASE\_CRYPT\_AES algorithm (AES256)
- JBASE\_CRYPT\_AES\_BASE64 algorithm (AES256, BASE64 encoded)
- JBASE\_CRYPT\_ROT13 Simple ROT13 algorithm. (Key not used)
- JBASE\_CRYPT\_XOR11 XOR MOD11 algorithm. Uses the first character of a key as a seed value.
- JBASE\_CRYPT\_RC2 RC2 algorithm
- JBASE\_CRYPT\_DES DES algorithm
- JBASE\_CRYPT\_3DES Three Key, Triple DES algorithm
- JBASE\_CRYPT\_BLOWFISH Blowfish algorithm
- JBASE\_CRYPT\_BASE64 (See below)

BASE64  is not really an encryption method, but more of an encoding. The reason  for this is that the output of an encryption often results in a binary string. It allows binary data to be represented as a character string. BASE64 operation is not required but is performed in addition to the  primary algorithm. e.g. JBASE\_CRYPT\_RC2\_BASE64

**ENCRYPT** with this method is the same as a [DECRYPT](./../decrypt) with method JBASE\_CRYPT\_RC2  followed by [DECRYPT](./../decrypt) with method JBASE\_CRYPT\_BASE64.

[DECRYPT](./../decrypt)  with this method is the same as a [DECRYPT](./../decrypt) with method  JBASE\_CRYPT\_BASE64 followed by [DECRYPT](./../decrypt) with method JBASE\_CRYPT\_RC2.

- JBASE\_CRYPT\_RC2\_BASE64 RC2 algorithm
- JBASE\_CRYPT\_DES\_BASE64 DES algorithm
- JBASE\_CRYPT\_3DES\_BASE64 Triple DES algorithm
- JBASE\_CRYPT\_BLOWFISH \_BASE64 Blowfish algorithm.

An example of use may be as follows:

```
     INCLUDE JBC.h

     cipher = JBASE_CRYPT_BLOWFISH_BASE64

     key = "Thunderbirds 2086"
     str = "This is the string to be encrypted"
     enc = ENCRYPT(str, key, cipher)

     CRT "Encrypted: " :enc

     CRT "Decrypted: ":DECRYPT(enc, key, cipher)
```

The above will display as output:

```
Encrypted: bjrngdlVNjSsY6iUVhn8pA9WD2cYo7HB8at0QhwvjvApc8Gih8PQ/A==
Decrypted: This is the string to be encrypted
```

See also: [DECRYPT](./../decrypt).

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
