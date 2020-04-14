# jCL F-UREAD

<PageHeader />

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='file' vertical='middle' />
<badge text='uread' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

This command reads and locks a record from an open file into a file buffer. It takes the general form:

```
F-UREAD file-buffer key error-cmd-line
```

or

```
F-UR file-buffer key error-cmd-line
```

where:

- **file-buffer** is the number (1 to 9) of the file buffer with which the file is associated.
- **key** is the key of the record to be read and locked. Can be a literal (not enclosed in quotes), or a direct or indirect reference to a buffer or select register.
- **error-cmd-line** is the line immediately after the F-UREAD command. Only executed if the specified record cannot be read.

The F-UREAD command is identical to the F-READ  command, except that it also locks the record against access by another process, thus eliminating simultaneous updates. Any attempt to F-UREAD a record which is already locked will be suspended until the other process unlocks the record. Record locks are released by F-DELETE, F-WRITE  or F-FREE commands, or when the program terminates.

## Note

> It is good practice to F-UREAD a record before you create it. This will reserve the key in the file and avoid double updates. Remember though that the command line immediately following the F-UREAD command will be executed because the record does not exist.

Back to [jCL.](./../README.md)
  
<PageFooter />