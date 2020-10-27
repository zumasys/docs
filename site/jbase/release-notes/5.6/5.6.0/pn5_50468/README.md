# PN5_50468

<PageHeader />

## Description

Add support for encryption to type UD (directory) files.

To enable encryption use ENCRYPTED=TRUE, e.g.:

```
CREATE-FILE DATA TESTONE TYPE=UD ENCRYPTED=TRUE
```

Once enabled all entries in the file will be encrypted. If accessed via jBASE (jQL, jBC, etc), the data will be decrypted automatically, however if viewed in external processes (vi, notepad, etc.), the data be encrypted.

The same options for hashed files can be used with type UD files as well, e.g.:

```
ENCRYPTED=TRUE
ALGORITHM=<<algorithm>>
KEY=<<decrypt key>>
```

Supported encryption algorithms:

```
RC2, BASE64, DES, 3DES, BLOWFISH, AES
```

Encryption modes:

```
Default: use internal encryption: ENCRYPTED=TRUE
Custom: Use a defined method and key: ENCRYPTED=TRUE ALGORITHM=xxx KEY=yyy
```

e.g.:

```
Default: CREATE-FILE TEST ENCRYPTED=TRUE
Custom:  CREATE-FILE TEST TYPE=UD ENCRYPTED=TRUE ALGORITHM=BLOWFISH KEY=12344567889
```

## Caveats

- The contents of an encrypted UD file should never be altered using an external (non-jBASE) process like vi or notepad; if the content of the file are altered it will be impossible to decrypt.
- Don't delete or alter the '.jbase_header' file. Without this entry jBASE won't know how to decrypt any entries.
- WRITESEQ / READSEQ will not encrypt / decrypt the data.  

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />
