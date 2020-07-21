# CREATE-FILE

<PageHeader />

## Description

The CREATE-FILE command enables the user to create a new file for use within the jBASE system.

```
CREATE-FILE {-L} {DICT|DATA} FileName{,Section} {HASHMETHOD=nnn} {TYPE=tname} {ENCRYPTED=YES|NO} {PERM=nnn} {LOG=YES|NO} {TRANS=YES|NO} {BACKUP=YES|NO} {CASE=YES|NO}
{SECURE=YES|NO} {NETWORK=YES|NO} {NumBuckets, BucketMult, SecSize} {NumBuckets, BucketMult, SecSize}
```

Where:

- **-L** - This option prevents any updates to this file from being recorded in the Transaction Journal entries. It does the same thing as LOG=NO.
- **DICT** - This is an optional keyword to specify dictionary section creation only.
- **DATA** - This is an optional keyword to specify data section creation only.
- **FileName** - This is the name to be used for the created file. The name can include absolute or relative path information.
- **Section** - This is the name to be used for the new data section to be created.
- **HASHMETHOD** - The hash method defines how the records are allocated into the file buckets or groups. The hash methods can make slight differences to performance dependent upon the values of the record keys, however the methods can also improve the performance of the Account Restore dependent upon source of file. The numeric parameter can be one of :

    1 - Uniform hash algorithm  
    2 - General hashing algorithm  
    3 - Pick/Reality hash emulation  
    4 - Sequoia hash emulation  
    5 - jBASE hashing (provides the best spread for item-ids regardless of whether item-ids are alpha, numeric or a combination)

- **TYPE** - The **tname** parameter is used to specify the type of file to be created. The following file types are provided as standard.

> Note: **Section** can be used to do things like create an OBJECT code section for compiled object code to be stored which is particularly handy when using file system directories/folders to store source code. Creating an OBJECT code section will keep your source code directory from becoming cluttered with object code. An example: `CREATE-FILE TEST.BP,OBJECT TYPE=UD`

**HASH3 or j3**
The HASH3 file type is portable across platforms and is network friendly in that if a network connection is disconnected during the update procedure then file integrity can still be guaranteed. The HASH3 file type does not use the jRLA or jDLS locking even when enabled but uses the default system locking capability, thus allowing record or item locking with networked applications. The default bucket size of a HASH3 file is 1024 bytes. See [JEDI\_SECURE\_LEVEL](./../../environment-variables/jedi_secure_level) for configurable levels of data flushing.

**HASH4 or j4**
The HASH4 file type uses memory mapping when available, otherwise defaults to reads and writes and is portable across platforms. The HASH4 file type will use jRLA or jDLS locking when enabled but can also be configured to use the default system locking method for networking. The default bucket size of a HASH4 file is 4096 bytes. j4 files use 'INT32' for any offsets, in order to provide compatibility with previous versions of jBASE. As such, j4 files should only be used where the file size will not exceed 2Gb.

**jPLUS or jP (jBASE 4.1 and 5.2)**
**jPlus** files provide large file support on 64 bit UNIX and Windows platforms, such that Hash files can extend beyond the normal 2GB operating system limit. In addition, jPlus files provide configurable levels of data flushing (see JEDI\_SECURE\_LEVEL) to ensure file integrity in the case of a system failure. Some Operating Systems require large file support to be enabled when the file system is created. Refer to your System Administration Guide for your specific platform.

**jD (jBASE 5.7)**
[**Dynamic Files**](./../dynamic-files) are a new auto-resizing file type introduced in jBASE 5.7.  Dynamic Files are the recommended hashed file type to to use going forward as they faster and more efficient that previous invocations of jBASE hashed files.

The **UD** file type specifies Windows or UNIX directories and Windows or UNIX files are to be used to represent file and records respectively.

**TJLOG**
Creates a stub file in the current directory that points to the current transaction log set. An additional parameter, SET can be used to specify the log set. For more information see [jlogdup](./../../transactions/transaction-replication/jlogadmin).

**DISTRIB**
Creates a stub file in the current directory that references a distributed file. See [distributed files](./../distributed-files/distributed-files-index) for further information.

- **ENCRYPTED=YES**- The file is encrypted based on the encryption type specified when running the [jsecurity](./../../encryption/jbase-encryption-database-security) command.
- **PERM**- The **PERM** parameters are used to set the permissions of the file as per the chmod command. i.e. an octal number nnn. By default the value is 666 and will be masked by the current umask setting.
- **LOG=YES\|NO**-The **LOG** parameters set or clear the flag which allows the file to be included or excluded when utilizing the item or transaction logging mechanism, if licensed on your system. The value is set to YES by default.
- **TRANS=YES\|NO** - The **TRANS** parameters set or clear the flag which allows the file to be included or excluded from within any transaction boundaries defined by an executing program. The value is set to YES by default.
- **BACKUP=YES\|NO** - The **BACKUP** parameters set or clear the flag which allows the file to be included automatically by the jBASE jbackup utility. The value is set to YES by default.
- **NETWORK=YES\|NO** - The **NETWORK** parameters disable or enable the file for use over a network. Only applicable to HASH4 and HASH5 file types. The value is set to AUTO by default to use jDLS when enabled.
- **SECURE=YES\|NO** - The **SECURE** parameters disable or enable secure file updates. Only applicable to HASH3 and jPLUS file types. The value is set to NO by default.
- **NumBuckets** - **NumBuckets** and **BucketMult** combine to size a hash file. NumBuckets specifies the number of hashing buckets to allocate to the file.
- **BucketMult**- **BucketMult** defines the size of each bucket in multiples of block size, usually 4k, and defaults to 1 if omitted. The first instance of this construct specifies the size of the dictionary section of the file while the second instance specifies the size of the data section of the file.
- **SecSize**- **SecSize** can be used to change the maximum record size that will be stored within the primary bucket. SecSize is specified as a multiple of the primary bucket size. If a record is to be stored that exceeds this size, it is allocated new space within the file and a pointer to the record is installed in its hash bucket. If the file is to contain many unevenly sized records, the most efficient way of creating the file is to specify a secondary bucket size of 0. This will cause all records to be stored as pointers to their physical location on disk.
- **CASE** - Case can be used to make a file id's case insensitive (CASE=NO).  This duplicates D3 style files.  With this feature an item called ITEM1 will be the same as item1 or Item1.

## Note

> A hashed file should be created with enough space to hold the expected number of records. Given the number of records and the average size of each record the number of buckets can be calculated. The default bucket size of 4k should only be changed if the average record size is much greater than this value.
>
> The value of NumBuckets must be an odd number and usually works best if it is a prime number. CREATE-FILE will change the value of NumBuckets if you supply an even value.
>
> The CREATE-FILE command will always create the file in the current working directory unless a full explicit path is specified; the environment variable JEDIFILEPATH has no with meaning in the context of file creation.
>
> Beware of creating a file and then immediately deleting it using the DELETE-FILE command. The DELETE-FILE command will respect the JEDIFILEPATH variable and if it finds a file of the same name in a directory earlier in the path than the current working directory it will delete that file. For this reason it is best to define the JEDIFILEPATH variable as "." (the current working directory).
>
> The file options can be modified after the file has been created using the jchmod utility.
>
> On Windows there are certain restricted filenames. See the Microsoft Knowledgebase article [here](http://msdn.microsoft.com/en-us/library/windows/desktop/aa365247%28v=vs.85%29.aspx).

### Examples

```
CREATE-FILE File1 1 37
File File1]D created, type = j4
File File1 created, type = j4
```

Creates a dictionary file modulo 1, (1 bucket of 4096 bytes), and a data file modulo 37, (37 buckets, primary size 151552, (37\*4096)). The actual file size will be slightly larger to accommodate internal bucket pointers.

```
CREATE-FILE File2 1 37,3
File File2]D created, type = j4
File File2 created, type = j4
```

Creates a dictionary file modulo 1, ( 1 bucket of 4096), and a data file modulo 37 with separation of 3, ( 37 buckets at 3 times page size, primary size 454656, (37\*(3\*4096))). The actual file size will be slightly larger to accommodate internal bucket pointers.

```
CREATE-FILE DICT File3 TYPE=HASH3 SECURE=YES 23
```

Creates a dictionary-only file of type j3 modulo 23, with secure updates enabled. The JEDI\_SECURE\_LEVEL environment variable can be used to set different levels of data flushing.

```
CREATE-FILE DATA File4 1000003 TYPE=JP SECURE=YES
```

Creates a large date-only file of type jPLUS with a modulo of 1000003, with secure updates enabled. A file of this size is only supported on 64 bit platforms. The JEDI\_SECURE\_LEVEL environment variable can be used to set different levels of data flushing.

```
CREATE-FILE File5 NETWORK=YES 101
```

Creates a dictionary and data section file of type j4, which only uses network locks.

```
CREATE-FILE H:\Payables\File6 3 431
```

Creates a dictionary and data section of type j4 on network drive H, directory Payables.

Back to [Files](./../README.md)

  
<PageFooter />
