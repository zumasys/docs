# File Integrity

<PageHeader />

**Tags:**
<badge text='file system' vertical='middle' />
<badge text='files' vertical='middle' />

## Description

The jBASE hash files systems have been found to provide a very high level of file integrity in comparison to legacy systems. The main reason for this high level of integrity is mainly due to the jBASE hash file design. Each hash file is a separate entity, and as such can only be updated, from jBASE applications, by the relevant database driver.

Other processes or activities such as the spooler, which is well known on some legacy systems for causing file corruption cannot actually directly access the hash file systems and therefore can not cause file corruption. Even updates to hash files can not cause a file corruption problem on another hash file.

Unlike other systems jBASE is not an environment or operating system in itself and so obviates the need to recover from any of kind of jBASE environment failure as such a thing does not exist.

The only real time jBASE hash files can suffer from file corruption is when the base operating system fails completely. Even in these situations it is highly likely that actual file corruption has been avoided if the hash files were correctly sized. The reason being, that file corruption can occur if one memory page has been written to disk, containing a pointer to another memory page and the second memory page did not make it to disk before the system failed. Or as another example, a process was in the middle of writing to a memory mapped file when the system failed. With correctly size files these scenarios should be greatly reduced.

However given that the file is not corrupted does not preclude the fact that updates performed since the last memory flush may be lost. Therefore although the file and its integrity may have survived the system crash the last few updates may well have been casualties.

The following commands can be used to help in the general maintenance of hash files.

| Command  | Description |
| --- | --- |
| [jstat](./../jstat) | displays hash file statistics |
| [jcheck](./../jcheck) | check hash file integrity |
| [jchmod](./../../administration/utilities/jchmod) | modifies hash file parameters |
| [jrf](./../jrf) | resizes hash files |
| [jcomp](./../jcomp) | compare hash file contents |

Back to [Files](./../README.md)
