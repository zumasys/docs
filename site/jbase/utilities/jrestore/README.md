# jrestore

<PageHeader />

## Description

The **jrestore** utility provides fast on-line restores from the saves produced by the [jbackup](./../jbackup) utility.

The **jrestore** can be controlled to restore from any file type on the backup, from single records to multiple directories.

The **jrestore** utility can also be used to verify [jbackup](./../jbackup) saves.

```
jrestore -options
```

Where **options** may be:


| Option | Explanation |
| --- | --- |
| -a | restore from current media position |
| -bn | set number of read buffers to n (default is 8, minimum is 1) |
| -c"old new" | restore old directory path as new directory path |
| -d"DirRE" | restore directory files matching regular expression |
| -f Device | restore from device file, default stdin |
| -h"HashRE" | restore hash files matching regular expression |
| -H FileList | restore files using only file names from FileList file |
| -i"ItemRE" | restore hash file items matching regular expression |
| -I ItemList | restore hash file items using only item ids from ItemList file |
| -l"LnkdRE" | restore links matching regular expression |
| -k EncKey | Encryption key |
| -n | control info files not restored |
| -N | control info files restored and indexes rebuilt |
| -o"OfileRE" | restore other files matching regular expression |
| -pn | set priority, nice value of parent process |
| -u"UfileRE" | restore normal file matching regular expression |
| -v | verbose mode |
| -F | use fixed block device. Use for QIC tapes |
| -B | force block size to 128k, default 16k |
| -Cn | force block size to n bytes, rounded to nearest k |
| -P | print and scan files only, no restore |
| -O | overwrite existing files and records |
| -R | suppress rewind last reel |
| -T type | restore hash files as specified file type; the original modulo and separation will be retained rather than use the 'resize' parameters. |
| -U | update only does not overwrite existing files or records |
| -V | verbose dot mode, displays a "." for each file |
| -W | Roll forware TJ logfiles after database restore |
| -X | Clear existing hashed files b efore population |
| -Z"RegExp"(jBASE 5.8) | All-encompassing option that allows anything to be restored.<br>It is similar to: -u"regexp" -h"regexp" -d"regexp" -o"regexp" -l"regexp".<br>This option can be specified more than once on the command line. |

When using jrestore, ensure that the command is executed at the standard shell not in jsh otherwise the double quotes and other meta characters will lose their meaning.

## Note

> On Windows, when specifying Windows path names the backslash must be escaped with a backslash, otherwise the backslash character is removed. e.g.
>
> ```
> C:\\MyApp\\new
> ```

Examples of use may be as:

```
jrestore -f /dev/rmt/ctape -P
```

Reads formatted files and directories from a streaming cartridge device, displaying each file or directory as it is encountered.

This option can be used to verify that the tape does not contain any parity or formatting errors and so can be restored at a later date.

```
jrestore -f /dev/rmt/floppy -v
```

Reads and restores formatted files and directories from a floppy disk device, displaying each file or directory as it is encountered.

```
jbackup -Ajbase | jrestore -c"/home/old /home/new"
```

Reads formatted files and directories from stdin, which is being supplied by jbackup, modifies all occurrences of path string /home/old to /home/new and then restores files and directories using modified path string.

```
jrestore -f BACKUP -d".*PAYROLL$"
```

Reads formatted files and directories from UNIX file BACKUP, limits restore to any directories whose path name ends in PAYROLL.

```
jrestore -f BACKUP -h"/CUSTOMERS$" -i".*SMITH.*"
```

Reads formatted files and directories from UNIX file BACKUP, limits restore to any hash files whose path name ends in CUSTOMERS, and only restores record ids containing the string SMITH.

Back to [Utilities](./../../utilities/README.md)

  
<PageFooter />
