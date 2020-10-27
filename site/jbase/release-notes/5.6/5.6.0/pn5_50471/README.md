# PN5_50471

<PageHeader />

## Description

Add extension to the CREATE-FILE command to enable file encryption.

Encryption arguments are as follows:

```
ENCRYPTED=TRUE
ALGORITHM=<<algorithm>>
KEY=<<decrypt key>>
```

Supported file types:

```
HASH4 (j4), HASHP (jPlus), JP (jPlus), UD
```

Supported encryption algorithms:

```
RC2, BASE64, DES, 3DES, BLOWFISH, AES
```

Encryption modes:

```
Default: Use internal encryption:      ENCRYPTED=TRUE
Custom:  Use a defined method and key: ENCRYPTED=TRUE ALGORITHM=xxx KEY=yyy
```

e.g.:

```
Default: CREATE-FILE TEST ENCRYPTED=TRUE 1 1
Custom:  CREATE-FILE TEST ENCRYPTED=TRUE ALGORITHM=BLOWFISH KEY=12344567889  1 1
```

## Previous Release Behavior

N/A

## Current Release Behavior

You can opt to use the default encryption method and internal encryption key by not specifying any algorithm or key:

```
CREATE-FILE TEST ENCRYPTED=TRUE  1 1
```

If UD file types are used, the flags which indicate this directory is encrypted are stored in the .jbase_header record. Deleting this record will stop the file from decrypting.  

Optionally specify your own encryption key:

```
CREATE-FILE TEST ENCRYPTED=TRUE ALGORITHM=BLOWFISH KEY=12344567889  1 1
```

If user specifies their own key, an encrypted version is stored in the ]K file, the above example will generate:

```
TEST
TEST]D
TEST]K
```

- no data in the file can be decrypted without the ]K file being accessible.
- key files have to be used with the file they were created with.

## Note

>Since this initial implementation, file encryption has been updated and the "]K" file is no longer relevant.
>
>See [jBASE Encryption - Database Security](https://docs.zumasys.com/jbase/encryption/jbase-encryption-database-security/) for further information.

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />
