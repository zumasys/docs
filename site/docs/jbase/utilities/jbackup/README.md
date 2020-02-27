# jbackup

**Created At:** 7/20/2018 2:35:32 PM  
**Updated At:** 10/24/2019 10:15:09 AM  
**Original Doc:** [jbackup](https://docs.jbase.com/46963-utilities/jbackup)  
**Original ID:** 328714  
**Internal:** No  

**Tags:**
<badge text='jfilesave' vertical='middle' />
<badge text='jrestore' vertical='middle' />
<badge text='jbackup' vertical='middle' />
<badge text='utilities' vertical='middle' />
<badge text='backup' vertical='middle' />

## Description

The **jbackup** utility provides fast on-line backup facilities and can also be used to check file integrity.

```
jbackup -Option {Inputlist}
```

Where:

- **inputlist** is a file containing a list of files, default stdin
- **option** may be:

| Option | Explanation |
| --- | --- |
| -bn | set number of write buffers to n (default is 8, minimum is 1) |
| -c | dump control files such as indexes as binary files |
| -e EncMode | Encryption mode (-E extended). EncMode can be: RC2, BASE64, DES, 3DES, BLOWFISH, AES, sha256 |
| -f Device | save to device file, default stdout |
| -F Device | save to device file with auto-incrementing suffix |
| -k EncKey | Encryption key |
| -l | link files to be saved as separate UNIX or hash files |
| -mn | maximum data capacity of media in Mb, default 100 Mb |
| -pn | set priority, nice value of parent process |
| -s | save summary of statistics to UNIX/Windows file |
| -v | verbose mode |
| -L file | save from List file |
| -B | force blocksize to 128k. default 16k |
| -Cn | force blocksize to n bytes, rounded to nearest k |
| -N | suppress compression if supported by device ( NT only) |
| -S Statfile | Save statistics of all saved objects in jBASE file Statfile. The dictionary for this file is JBCRELEASEDIR/jbackup]D. |
| -O | override [no backup](./../jchmod) file option, save all |
| -R | suppress automatic rewind at end of backup |
| -P | print and scan files only, no save |
| -V | verbose dot mode, displays a "." for each file |
| -W | Online backup - dump TJ logfiles and TJ config file |
| -A Account | save from user name home directory ( UNIX only ) |

## Uses

1. Use [jchmod](./../jchmod) to change the characteristics of a file. For instance:

```
 jchmod -B filename
```

will cause **jbackup** to skip 'filename'. Other options of interest are +B, -O and +O.

This is only effective for jBASE hashed files.  O/S level directory files will always be backed up.  
To avoid backup of O/S directories place them outside of the backup path and use Q-pointers, F-pointers or symbolic links.  
2. jbackup creates a file named **jbk\*PID** as a work file when executed. Therefore, jbackup must be run from a directory which has write privileges. If the file system or directory is not write enabled you will receive the error message **ERROR! Cannot open temporary file jbk\*PID.tmp, error 2**  
3. See also [jrestore](./../jrestore).

Examples of use of the jbackup command are as:

## On UNIX

```
find /home -print | jbackup -P
```

Reads all records, files and directories under the /home directory provided by the find selection and displays each file or directory name as it is encountered. This option can be used to verify the integrity of the selected files and directories.

```
jbackup -f /dev/rmt/floppy -m1 -v < FILELIST
```

Reads all files and directories listed in the UNIX file FILELIST and writes the formatted data blocks to the floppy disk device, displaying each file or directory name as it is encountered. The jbackup utility will prompt for the next disk if the amount of data produced exceeds the specified media size of 1 Mbyte.

```
jbackup -Ajbase -S/usr/jbc/tmp/jbase_stats >/dev/null
LIST /usr/jbc/tmp/jbase_stats USING /usr/jbc/jbackup NAME TOTAL SIZE ID-SUPP
```

Reads all files and directories in home directory of user-id "jbase". Generates statistics information and outputs blocks to stdout, which is redirected to /dev/null. The statistics information is then listed using the jbackup dictionary definitions to calculate the file space used.

## On Windows

```
jfind C:\users\vanessa -print | jbackup -P
```

Reads all records, files and directories under the C:\users\vanessa directory provided by the [jfind](./../../../jbase/jfind) selection and displays each file or directory name as it is encountered. The -P option means that the files are not actually backup (print and scan only). It is useful to verify the integrity of the selected files and directories. This command should be run with jshelltype **sh** rather than jsh.

```
jfind D:\data -print | jbackup -f C:\temp\save20030325 -m10000 -S C:\temp\stats -v
```

The [jfind](./../../../jbase/jfind) command outputs the names of all the files and directories under the D:\data directory. This output is passed to the jbackup command causing it to backup every file that jfind locates. Rather than save to tape, this jbackup command creates a backup *file*: "C:\temp\save20030325". Note that jbackup creates the "save2003025" file, but the directory "c:\temp" must exist before running the command.  
The **-m10000** option specifies that the maximum amount of data to back up is 10,000MB (or 10GB) rather than the default 100MB. The -S option causes file statistics to be written to the hashed file **stats**. This file should exist and be empty prior to commencing the backup. The **-v** option causes the name of each file to be displayed as it is backed up.  

## Note

>Because of the pipe character used to direct the output of jfind to jbackup, this command should be run with jshelltype **sh** rather than jsh.

Back to [Utilities](./../utilities)
