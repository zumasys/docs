# Create Encrypted Files

**Created At:** 5/31/2019 4:24:26 PM  
**Updated At:** 5/31/2019 4:25:08 PM  
**Original Doc:** [create-encrypted-files](https://docs.jbase.com/encryption/create-encrypted-files)  
**Original ID:** 392676  
**Internal:** Yes  




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

Type **UD**files (directories) can also be created as encrypted.

```
jsh ~ -->create-file data ebp type=ud encrypted=true
[ 417 ] File ebp created , type = UD
jsh ~ -->
```



**jBC**(BASIC) programs can be created and compiled in an encrypted **UD**type file.

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



**jcompile**will not work on an encrypted file. This won’t be done, **jcompile**doesn’t use JEDI to get its files, so it won’t ever work. If you have an encrypted source code file, you will have to use the **BASIC**command on it.
