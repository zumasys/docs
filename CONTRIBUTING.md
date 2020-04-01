# Contribution Guidelines

Please note, this is a WIP!

Formatting specifications for Markdown documents

A typical Markdown document:

````markdown
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

- **string** specifies the string to be encrypted.
- **key** is the value used to encrypt the string. Its use depends on **method**.
- **method** is a value which indicates the encryption mechanism to use.

The **ENCRYPT** and [DECRYPT](./../decrypt) functions that are part of jBASE BASIC now support the following cipher methods (Defined in **JBC.h**)

- JBASE_CRYPT_GENERAL General-purpose encryption scheme
- JBASE_CRYPT_AES algorithm (AES256)
- JBASE_CRYPT_AES_BASE64 algorithm (AES256, BASE64 encoded)
- JBASE_CRYPT_ROT13 Simple ROT13 algorithm. (Key not used)
- JBASE_CRYPT_XOR11 XOR MOD11 algorithm. Uses the first character of a key as a seed value.
- JBASE_CRYPT_RC2 RC2 algorithm
- JBASE_CRYPT_DES DES algorithm
- JBASE_CRYPT_3DES Three Key, Triple DES algorithm
- JBASE_CRYPT_BLOWFISH Blowfish algorithm
- JBASE_CRYPT_BASE64 (See below)

BASE64 is not really an encryption method, but more of an encoding. The reason for this is that the output of an encryption often results in a binary string. It allows binary data to be represented as a character string. BASE64 operation is not required but is performed in addition to the primary algorithm. e.g. JBASE_CRYPT_RC2_BASE64

**ENCRYPT** with this method is the same as a [DECRYPT](./../decrypt) with method JBASE_CRYPT_RC2 followed by [DECRYPT](./../decrypt) with method JBASE_CRYPT_BASE64.

[DECRYPT](./../decrypt) with this method is the same as a [DECRYPT](./../decrypt) with method JBASE_CRYPT_BASE64 followed by [DECRYPT](./../decrypt) with method JBASE_CRYPT_RC2.

- JBASE_CRYPT_RC2_BASE64 RC2 algorithm
- JBASE_CRYPT_DES_BASE64 DES algorithm
- JBASE_CRYPT_3DES_BASE64 Triple DES algorithm
- JBASE_CRYPT_BLOWFISH \_BASE64 Blowfish algorithm.

An example of use may be as follows:

```
INCLUDE JBC.h

cipher = JBASE_CRYPT_BLOWFISH_BASE64

key = "Thunderbirds 2086"
str = "This is the string to be encrypted"
enc = ENCRYPT(str, key, cipher)

CRT "Encrypted: " : enc

CRT "Decrypted: " : DECRYPT(enc, key, cipher)
```

The above will display as output:

```
Encrypted: bjrngdlVNjSsY6iUVhn8pA9WD2cYo7HB8at0QhwvjvApc8Gih8PQ/A==
Decrypted: This is the string to be encrypted
```

See also: [DECRYPT](./../decrypt).

Go back to [jBASE BASIC](./../README.md)
````

Do:

1. Use mixed case for headings, except for the main heading within the main categories such as jBC, jQL.
2. Do not use line numbers is example code, as the code blocks will automatically be numbered in Markdown.
3. Make the code look interesting by using mixed-case variables where possible.
4. In code examples, use “CRT” rather than “PRINT” except where it is relevant to actual printing.
5. Highlight keywords, i.e. **string**, **key** and **method** in this case.
6. Also highlight the statement/function plus any relevant connectors, i.e. IF, THEN, ELSE
7. Where possible, make sure that there is a link back to the page on level up.
8. Remove extraneous and trailing blanks, except where relevant, i.e. two spaces at the end of a line to cause a line-break.
9. With code examples, space out the code so that people can see what is going on, i,e.:

```
IF chr >= 32 AND chr < 128 THEN CRT CHAR(chr) "#2" : ELSE CRT " " :
```

10. Write URLs as links with Markdown syntax.
11. A pet peeve, please remember that it is and always has been “jBASE” and not “JBASE” or “Jbase”.

Don’t:

1. SHOUT. We are trying to present a modern look and should be encouraging users to move away from everything in capital letters.
2. Use HTML except where necessary.
   a. Most tables can be constructed using Markdown “syntax”, although some complex tables such at those in the jBC “FMT” page (../docs/jbase/jbc/fmt/README.md) will need the assistance of some HTML code in order to appear correctly on the web page.
   b. It is permissible to embed video content with HTML.
