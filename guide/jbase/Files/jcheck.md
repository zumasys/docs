# jcheck

**Created At:** 7/20/2018 1:34:43 PM  
**Updated At:** 8/23/2018 12:06:39 PM  

**Tags:**
<badge text='file recovery' vertical='middle' />
<badge text='utilities' vertical='middle' />
<badge text='file error checking' vertical='middle' />

## Description

The **jcheck** utility is intended as a tool to enable identification of HASH file problems which can be caused when the UNIX or Windows operating system crashes. It can be used on files of type J3, J4, JP (jPlus) and jD (Dynamic) .

There are several options to the jcheck utility which provide increasing degrees of verbosity. Additional options enable the skipping or isolation of particular groups.

The **jcheck**utility provides for a limited salvage operation. i.e. attempting to recover items from good groups. The success of the salvage operation is entirely dependent upon the extent of damage to the file.

Note this utility cannot not guarantee file recovery and fix the files. Use of the utility is as:

```
jcheck –Options {Filename}
```

where option may be:


| Option<br> | Explanation<br> |
| --- | --- |
| g<br> | display group information<br> |
| h<br> | display options<br> |
| i<br> | display ingroup information<br> |
| k<br> | keep bad ids on salvage<br> |
| o<br> | display out of group information<br> |
| r<br> | display record information<br> |
| s<br> | display salvage information<br> |
| v<br> | verbose<br> |
| Bn<br> | begin check from group number ‘n’<br> |
| D<br> | salvage to directory<br> |
| En<br> | end check at group number ‘n’<br> |
| F<br> | display freespace information<br> |
| G<br> | reset group if in error<br> |
| L<br> | limit maximum group malloc to 'n' MB, default 1MB<br> |
| M<br> | move salvaged file back to original name and move the original file to one with a prefix XLVG\_ ; used with -S option<br> |
| O<br> | display record offset information<br> |
| P<br> | pause after each group<br> |
| R<br> | redirect stderr to stdout<br> |
| S<br> | salvage to file, a file with a prefix of SLVG\_ is created<br> |




The **G** option will clear ALL data from groups where errors are detected. Error detection can be limited to specific groups or ranges of groups by using the **B** and E options. The G option should ONLY be used in isolated cases when the requirement is to bring the file back on-line, as quickly as possible, without regard for data loss. It is also advised that a copy of the file be taken before use of the **G** option. At some point the file should be recovered by the file salvage (-S) together with the normal file recovery mechanisms. This option is restricted to Administrators / root.

The **M** option should only be use when users are disconnected from the system since moving a file while users are connected may result in additional data loss. This option is restricted to Administrators / root.

## Note:


> Salvage files, files prefixed with **SLVG\_**and **XLVG\_**, are never explicitly cleared or deleted.
> 
> Even after a **jcheck** is run, it is advisable to run **jrf** on the salvaged file (or create a temporary file and copy the contents of the salvaged file to the temporary file, and then rename the temporary file back to the original name), in order to ensure that corruption is not present in the 'free space' of the salvaged file.


Examples of use may be as:

```
jcheck -v HashFile]D
```

Checks the dictionary of file ‘HashFile’ for corruption

```
jfind . -type f -print | jcheck -v
```

Checks all files supplied by the [jfind](328698-jfind) command

```
jcheck -S -v MyFile
```

Check and salvage items to salvage file
