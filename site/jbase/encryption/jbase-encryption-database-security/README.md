# jBASE Encryption - Database Security

**Created At:** 6/17/2018 8:49:36 AM  
**Updated At:** 12/20/2019 10:17:21 PM  
**Original Doc:** [jbase-encryption-database-security](https://docs.jbase.com/30301-jbase/jbase-encryption-database-security)  
**Original ID:** 322165  
**Internal:** No  

## Abstract

jBASE 5.6 introduced a native encryption option that was later enhanced in jBASE 5.7.2 to better adhere to compliance and regulatory requirements. The feature allows jBASE to encrypt data files at rest, such that only parties with the decryption key can decode and read the data. This document covers the administration, creation, and maintenance of encrypted files on jBASE.

## Administration

The **jsecurity** command is used to create an encryption profile. At the present time, only one profile per system is allowed. The default encryption type is Advanced Encryption Standard (AES) 256-bit encryption algorithm, an encryption cipher that uses the same secret key to encrypt and decrypt data.

The data encryption process includes:

- Create a database security profile or master key.
- Create an encryption key or passphrase for files.
- Encrypt data with the encryption keys.

### Info #1

Most options of the jsecurity command require root/administrator privileges

```
jsh ~ -->jsecurity -h
jsecurity: Utility to manipulate the encryption and security of jBASE data.
Called as:
jsecurity {-f filename} {-o} new
jsecurity {-f filename} {-o} load
jsecurity {-f filename} display
jsecurity status
jsecurity unload
jsecurity -h

Where:
-f   Optional filename for security file.
filename can be a full or relative path.
Default: JBCRELEASEDIR/config/filesecurity

-o   Overwrite existing key or key file.

-h   Display this help screen.

jsh ~ -->jsecurity new

Enter encryption key for security file :
Re-enter encryption key for security file :

Enter the encryption type and key for the jBASE data files.
Enter encryption type, Q to quit or ? for a list (default AES) : ?
RC2
DES
3DES
BLOWFISH
AES
AES_CTR
Enter encryption type, Q to quit or ? for a list (default AES) :
Encryption: AES

Enter encryption key for jBASE Data files :
Re-enter encryption key for jBASE Data files :

Enter number of iterations to hash key, Q to quit
or ? for more info (default 5000 iterations) : ?

jBASE uses PBKDF2 to derive the actual encryption key based
on the key you enter. The default number of iterations is 5000,
but you can enter a number between 0 and 50000. Hashing the key
using PBKDF2 greatly strengthens the security of your system.
If you choose 0 iterations, your actual key will be used to
encrypt files, however it is recommended to hash the key for
increased security.

Enter number of iterations to hash key, Q to quit
or ? for more info (default 5000 iterations) :
New security profile successfully created.
jsh ~ -->
```

### Info #2

- The **filename** used with the **-f** option can be full or relative. If the **-f** option is not used then the default is **$JBCRELEASEDIR/config/filesecurity**.
- The **AES** cipher is **AES256**
- [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) is a way of obscuring the password

The last step is to **load** the profile into shared memory. ***This needs to be done EACH TIME the system is rebooted or a new security profile needs to be activated.***

```
jsh ~ -->jsecurity load

Enter encryption key for security file :
Security profile successfully loaded.

jsh ~ -->jsecurity display
Enter encryption key for security file :
File encryption type : AES
```

There is no maximum length for the encryption key for jBASE data files when using **PBKDF2**to derive the actual key. This is the default. However, if number of iterations is 0, the maximum key size is 32 characters.

### Warning

On Windows, the shared memory that jBASE creates is unloaded when the last jBASE process terminates. This means that you must have at least 1 running jBASE process in order for the security profile to remain loaded. The best way to accomplish this is to start **jDLS** beforehand which will allow shared memory to persist.

To determine whether or not the security profile has been loaded:

```
jsh ~ -->jsecurity status
Security profile is loaded.
```

This is the only option that does not require root/administrator privileges, so it can be used by any user, or process, to ensure that programs will not run into any issues attempting to access encrypted files.

The status can also be obtained programmatically :

```
PROGRAM jsecurity_status
EXECUTE "jsecurity status" SETTING error_code CAPTURING quiet
security_profile_is_loaded = (error_code<1,1> NE 12)
IF security_profile_is_loaded THEN
    CRT "Security profile is loaded."
END ELSE
    CRT "Security profile is NOT loaded."
END
```

## Create Encrypted Files

To create an encrypted file, use the **CREATE-FILE** command with the **ENCRYPTED=TRUE** option:

```
jsh ~ -->create-file efile 1 1 encrypted=true
[ 417 ] File efile]D created , type = JP
[ 417 ] File efile created , type = JP
jsh ~ -->make-demo-file 10 efile (c

10 records created.

jsh ~ -->had efile
        Hex/Ascii dump of 'efile'

000000    4a 42 43 5f 5f 48 53 50 - 00 00 10 00 00 00 20 00    JBC__HSP...... .
000010    00 00 00 01 00 00 00 03 - 5b 27 71 ab 00 00 00 05    ........['q.....
000020    00 08 00 40 00 00 00 00 - 00 00 10 00 00 00 00 00    ...@............
000030    00 00 00 00 00 00 00 00 - 00 00 00 00 00 00 20 00    .............. .
000040    00 00 00 00 00 00 00 00 - 00 00 00 00 00 00 00 00    ................
* 252
001010    00 00 00 01 00 00 09 40 - 00 00 00 0a 5b 27 71 c2    .......@....['q.
001020    00 00 00 00 00 00 00 10 - 00 00 01 00 5b 27 71 c2    ............['q.
001030    12 8a 39 f2 3e 2d b9 49 - 32 00 74 39 e5 ca c5 bd    ..9.>-.I2.t9....
001040    ff 7e 78 d9 76 00 5e 0e - c6 b8 e7 7a 87 58 fb ab    .~x.v.^....z.X..
001050    92 60 9e ee aa cc 1f ff - 81 9f 62 47 0f 71 15 37    .`........bG.q.7
001060    51 8c e5 39 2e 2f ab 02 - 3a f9 86 c6 39 bd d9 34    Q..9./..:...9..4
001070    5d 60 52 a8 bc a9 66 0b - 23 df a1 c8 ce 9b 93 35    ]`R...f.#......5
001080    d9 94 4d 26 6e 00 bb 79 - eb 1e 7a 65 30 3a f9 9a    ..M&n..y..ze0:..
001090    b5 a2 74 9b 9f 76 9e eb - 1c b8 13 5f 0d d7 17 fc    ..t..v....._....
0010a0    db 70 78 ce 33 65 ca 4e - c1 4d 9a 0f af 00 48 c0    .px.3e.N.M....H.
0010b0    56 55 9f 97 5a 4c 42 c5 - af 36 4e b1 a8 44 d7 e4    VU..ZLB..6N..D..
0010c0    60 fb bf 9f 64 6c 3c 30 - 52 79 31 30 7a dc 82 1d    `...dl<0Ry10z...
0010d0    b3 4b f0 43 7c 10 01 a9 - 03 d3 cf ce 10 84 34 84    .K.C|.........4.
0010e0    c4 ef 66 20 34 32 cd a5 - a6 f6 11 5c bd 63 79 b0    ..f 42.....\.cy.
0010f0    18 78 1c 70 00 19 18 5d - 5b d2 c4 7e 2e 77 53 a2    .x.p...][..~.wS.
[snip]
```

When files are created in this manner, the entire record including the record key (item ID) is encrypted, as shown by the hex dump above.

Type **UD** files (directories) can also be created as encrypted.

```
jsh ~ -->create-file data ebp type=ud encrypted=true
[ 417 ] File ebp created , type = UD
jsh ~ -->
```

**jBC** (BASIC) programs can be created  and compiled in an encrypted **UD** type file.

```
ed ebp goodbye.b
New record
goodbye.b
TOP
.i
001+CRT 'Goodbye, cruel world!'
002+
BOTTOM
.fi
Record 'goodbye.b' written to file 'ebp'

jsh ~ -->basic ebp goodbye.b
goodbye.b
BASIC_1.c
Source file goodbye.b compiled successfully
jsh ~ -->catalog ebp goodbye
goodbye
Object goodbye cataloged successfully

jsh ~ -->goodbye
Goodbye, cruel world!
```

Note however that when you create an encrypted **UD** file type the record key (item ID) is not encrypted because certain characters (like "/" which is a BASE64 character) are illegal in file names.

```
jsh ~\ebp -->jdir
06/18/18  09:52                     46 goodbye.b
06/18/18  09:53                  3,372 goodbye.obj
               2 File(s)          3,418 bytes

jsh ~\ebp -->had goodbye.b
        Hex/Ascii dump of 'goodbye.b'

000000    68 4c 36 36 69 2b 76 4a - 63 76 46 72 46 2f 70 6d    hL66i+vJcvFrF/pm
000010    76 55 66 4c 4b 5a 67 65 - 61 6e 6c 50 68 47 34 78    vUfLKZgeanlPhG4x
000020    66 68 48 32 72 76 6f 42 - 4f 73 4d 3d 0d 0a          fhH2rvoBOsM=..
jsh ~\ebp -->
```

**jcompile** will not work on an encrypted file. This won’t be done, **jcompile** doesn’t use JEDI to get its files, so it won’t ever work. If you have an encrypted source code file, you will have to use the **BASIC** command on it.

## Miscellaneous Notes

- Encrypted indexes can be created on encrypted files. An index is automatically encrypted if the main file is encrypted.
- Triggers can be placed on encrypted files; if the trigger writes to an encrypted file then the written data remains encrypted.
- Spooler hold files are encrypted in the same manner as before, by using the **(Z** option with **SP-CREATE**/**SP-DEVICE**. This will eventually be changed to use the new encryption paradigm. Refer to the **Configure an Encrypted Spooler Queue** below.
- The **rename-file** command now works because there is no more ]K file; the contents of that file are now stored in the shared memory that gets created when the security profile is loaded, i.e. **jsecurity load**.
- **jbackup** will decrypt the data. This is a good thing because a backup without encryption gives you some safety against losing your keys and if you lose your keys it is game over.
- **make-demo-file** has a new option **(E** to create the file as encrypted.
- Case Insensitive files can be created as encrypted by using the **CASE=NO** option.
- Transaction boundaries (**TRANSTART** / **TRANSEND**, etc.) work with encrypted files.
- **jrf** works on encrypted files and will keep the resized file encrypted. The **-O** option will encrypt the file if it was previously un-encrypted; **-N** will decrypt the file if it was previously encrypted. On jBASE 5.7 resized files will, by default, be converted to a Dynamic File unless explicitly told otherwise with one of the other options.
- Dynamic Files can be created as encrypted (jBASE 5.7 only)
- **create-file** with **type=jbc** recognizes the **encrypted=true** option, e.g. **create-file data bp type=ud encrypted=true** (jBASE 5.7 only)
- At this time, the logs created by **[Audit Logging](./../introduction-to-audit-logging)** are not encrypted. This will be implemented in a future release.
- The following code, which uses a feature of [**Dynamic Objects**](./../../dynamic-objects/dynamic-objects), can be used to programmatically determine if a file is encrypted:

```
PROGRAM encrypted
filename = sentence(1)  ;* obtain the filename from the command line
OPEN filename TO filevar ELSE STOP 201, filename
file_is_encrypted = filevar->getstats()->encrypt
CRT "File ":DQUOTE(filename):" is ":
CRT (IF file_is_encrypted THEN "encrypted." ELSE "NOT encrypted.")
```

## Create an Encrypted Spooler Queue

To protect data that is sent to the spooler, jobs can be encrypted but only when using device types of **PROG** or **FILE** when the spooler queue is initially created.

**Command Syntax:**

```
SP-CREATE <QueueName> PROG devicename (Z
SP-CREATE <QueueName> FILE devicename (Z
```

To enable spooler encryption you must use the **PROG** or **FILE** device type with the (Z) option when you create the form queue.

```
SP-CREATE MYQUEUE PROG lp -d HPLASERJET (Z
SP-ASSIGN =MYQUEUE
```

If the **H** (Hold) option is specified doing the **SP-ASSIGN** then it will not be possible to view the contents of the print job:

```
SP-ASSIGN =MYQUEUE HS
```

If you attempt to edit the print job with **SP-EDIT** or with option 8 on the **SP-JOBS** menu then you will see the message **Encrypted no access from edit**, e.g.

```
SP-EDIT 2
PRINT JOB # 2
TOI
.
Encrypted no access from edit
```

Back to [Encryption](./../README.md)
