# JEDI_PREFILEOP/JEDI_POSTFILEOP

<PageHeader />

The [CREATE-FILE](./../../files/create-trigger/README.md) command has a number of optional parameters. Some of them are:

```
TYPE
CASE
BACKUP
ENCRYPTED
```

The **JEDI_PREFILEOP** environment variable tells the [CREATE-FILE](./../../files/create-trigger/README.md) command to use the specified parameters under **all** conditions.

The **JEDI_POSTFILEOP** environment variable tells the [CREATE-FILE](./../../files/create-trigger/README.md) command to use the specified parameters if they haven't been specified when doing the CREATE-FILE.

**JEDI_PREFILEOP** takes precedence if both are defined in the same session. Be careful with this as you may think the **JEDI_POSTFILEOP** behavior is active.

## JEDI_PREFILEOP example

```
C:\home>set JEDI_PREFILEOP=TYPE=JP CASE=NO ENCRYPTED=NO

C:\home>create-file jtest
[ 416 ] Illegal or missing modulo or separation  

C:\home>create-file jtest 1 11
[ 417 ] File jtest]D created , type = JP
[ 417 ] File jtest created , type = JP

C:\home>jstat -v jtest
File C:\home\jtest
Type=JP , Hash method = 7 , Created Wed May 27 04:33:36 2020
Groups = 11 , Frame size = 4096 bytes , Secondary Record Size = 8192 bytes
Restore re-size parameters : (none)
File size = 49152 bytes , Inode = 393877 , Device = Id 41076
Last Accessed Wed May 27 09:33:36 2020 , Last Modified Wed May 27 09:33:36 2020
Backup = YES , Log = YES , Rollback = YES , Network = NO, Secure updates = NO
Case = OFF - Case insensitive (internal) , Encrypted = NO

[snip]
```

The first CREATE-FILE failed because we told jBASE to always use TYPE=JP and we didn't specify any filesize parameters.

The second CREATE-FILE succeeded and the jstat shows that the file was created as 'Case insensitive' and not encrypted. If we had changed it to ENCRYPTED=YES and encryption was not active then the create-file would have failed.

## JEDI_POSTFILEOP example

```
C:\home>set JEDI_POSTFILEOP=TYPE=JD CASE=NO

C:\home>create-file jtest 11 503
[ 417 ] File jtest]D created , type = JD
[ 417 ] File jtest created , type = JD

C:\home>jstat -v jtest
File C:\home\jtest
Type=JD , Created Wed May 27 05:00:51 2020
Frame size = 8192 bytes , Secondary Record Size = 2040 bytes
Hash Index Table: Fid 1, Frames 1, Groups 1, Mask Bits 0
File size = 24576 bytes , Inode = 393913 , Device = Id 41076
Last Accessed Wed May 27 10:00:51 2020 , Last Modified Wed May 27 10:00:51 2020
Backup = YES , Log = YES , Rollback = YES , Network = NO , Secure updates = NO
Case = OFF - Case insensitive (internal) , Encrypted = NO , Lock = MUTEX

[snip]
```

Because we didn't specify a TYPE, CREATE-FILE ignored the size parameters.

Normally, when not in D3 emulation, a file would be created as Case Sensitive by default. In this case, the file was created as Case Insenstive because we specified CASE=NO when defining JEDI_POSTFILEOP. If we had not specified that then the file would have resorted to the default behavior.

## Notes

>You can specify as many space-delimited settings as you wish.

## As another example

```
C:\git\core\International\src>set JEDI_POSTFILEOP=ENCRYPTED=YES

C:\git\core\International\src>CREATE-FILE jtest
jEDI: Error, ENCRYPTED option found but encryption profile has not been loaded.
** Error [ JEDI_FILEOP_FAIL ] **
File operation failed, rc 22, for file jtest]D
```

This failed because 'jsecurity load' was never done.

Back to [Environment Variables](./../README.md)

<PageFooter />
