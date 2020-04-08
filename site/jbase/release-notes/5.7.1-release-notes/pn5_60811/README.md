# PN5_60811

<PageHeader />

## Description

Util: Enhance the **COMO** command to allow the user to specify the directory for the como log entries

### Previous Release Behavior

The **COMO** command had a hard-coded **&COMO&** directory

### Current Release Behavior

The new syntax is:

```
        COMO ON|APPEND|DELETE {directory} SessionID
        COMO OFF
```

If "directory" is not specified then a directory called &COMO& is created in the current directory.

e.g.

```
COMO ON /home/danielk/comodata recording
```

creates the directory "comodata" under "/home/danielk" (which must pre-exist) and will create the file "recording" in it.

Back to [5.7.1 Release Notes](./../README.md)
